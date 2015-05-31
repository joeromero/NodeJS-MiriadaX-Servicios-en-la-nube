var fs = require('fs'),
    cm = require('./ConsoleMessage');

function copiarDatos () {
    cm.info('Iniciando aplicación')
    if (verificarParametrosDeEntrada(process.argv)) {
        cm.info('Cantidad de parámetros suficientes');
        archivoDeDestino = process.argv[2];
        if (fs.existsSync(archivoDeDestino)) {
            cm.info('El archivo de destino existe');
            cm.info('Obteniendo archivos a concatenar');
            var archivosAConcatenar = process.argv.slice(3, process.argv.length);
            cm.info('Número de archivos a concatenar: ' + archivosAConcatenar.length + '\n');
            concatenarArchivo(archivoDeDestino, archivosAConcatenar, 0);
            mostrarResultadoFinal(archivoDeDestino)
        }
    } else {
        cm.error('Sintaxis de llamada: node <app>.js <fichero_destino> <fichero_1> <fichero_2> ...')
        process.exit();
    }
}

function verificarParametrosDeEntrada (params) {
    return (params.length > 3) ? true : false;
}

function leerArchivo (archivoALeer) {
    cm.info('Iniciando proceso de lectura del archivo ' + archivoALeer);
    if (fs.existsSync(archivoALeer)) {
        cm.info('El archivo ' + archivoALeer + ' existe.');
        try {
            return fs.readFileSync(archivoALeer);
        } catch (err) {
            cm.error('Problema abriendo el archivo ' + archivoALeer);
            cm.error(err);
            process.exit();
        }
    }
}

function aniadirAArchivo (archivo, datos) {
    cm.info('Añadiendo datos al archivo de destino ' + archivo);
    try {
        fs.appendFileSync(archivo, datos);
        cm.info('Datos añadidos correctamente.\n');
    } catch (err) {
        cm.error('Hubo un problema al añadir información al archivo.');
        cm.error(err);
    }
}

function concatenarArchivo (archivoDeDestino, archivosAConcatenar, indice) {
    if (indice < archivosAConcatenar.length) {
        cm.info('Concatenando archivo en índice ' + indice);
        if (fs.existsSync(archivosAConcatenar[indice])) {
            aniadirAArchivo(archivoDeDestino, leerArchivo(archivosAConcatenar[indice]));
            concatenarArchivo(archivoDeDestino, archivosAConcatenar, ++indice);
        } else {
            cm.error('El archivo ' + archivosAConcatenar[indice] + ' no está accesible.');
        }
    }
}

function mostrarResultadoFinal (archivoDeDestino) {
    console.log('\n');
    cm.info('Contenido final del archivo de destino:');
    console.log(leerArchivo(archivoDeDestino).toString());
}

(function(){
    copiarDatos();
})();
