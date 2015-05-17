# Módulo 2

## Ejercicio P2P único (obligatorio)

Dado el siguiente programa JavaScript que implementa la agenda de telefonos:

```sh
function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;

  return {
    "titulo":function(){ return _titulo; },
    "meter":function(nombre, tf){ _contenido[nombre]=tf; },
    "tf":function(nombre){ return _contenido[nombre]; },
    "borrar":function(nombre){ delete _contenido[nombre]; },
    "toJSON":function(){ return JSON.stringify(_contenido);}
  }
}

var amigos = agenda ("Amigos", {
  "Pepe":113278561,
  "José":157845123,
  "Jesús":178512355
});
```

Añadir un método ```listar()``` al cierre ```agenda(..) {...}``` que liste por consola cada par ```nombre, tf``` en una línea, de forma que al listar la agenda amigos generase:

"Pepe, 113278561 \nJosé, 157845123 \nJesús: 178512355 \n"

Incluir además una última instrucción en el programa que liste la agenda ```amigos``` por consola utilizando el nuevo método listar.

## Resolución

Archivo [mod_02_p2p_01_ddialar.js](https://github.com/ddialar/NodeJS-MiriadaX-Servicios-en-la-nube/blob/master/Mod%202%20-%20JS%20como%20server/mod_02_p2p_01_ddialar.js)
