var express = require('express'),
    app = express();

app.get('/preguntas', function (req, res) {
    res.send('<html><body>' +
                '<form method="get" action="/respuesta">' +
                    '<h3>¿Qui&eacute;n descubri&oacute; Am&eacute;rica?</h3>' +
                    '<div><input type="text" name="respuesta" /></div>' +
                    '<div><input type="hidden" name="pregunta" value="america" /></div>' +
                    '<div><input type="submit" value="Enviar" /></div>' +
                '</form>' +
                '<form method="get" action="/respuesta">' +
                    '<h3>¿Capital de Portugal?</h3>' +
                    '<div><input type="text" name="respuesta" /></div>' +
                    '<div><input type="hidden" name="pregunta" value="portugal" /></div>' +
                    '<div><input type="submit" value="Enviar" /></div>' +
                '</form>' +
             '</body></html>');
});

app.get('/respuesta', function (req, res) {
    var resultado = '<html><body>';

    try {
        switch (req.query.pregunta) {
            case 'america':
                resultado += 'Usted ha indicado que el descubridor de Am&eacute;rica fue:' +
                             '<h3>' + req.query.respuesta + '</h3>' +
                             'y su respuesta es: ';

                if (req.query.respuesta.match(/^(crist(ó|o)bal )?col(ó|o)n$/i) !== null) {
                    resultado += '<h2>Correcta</h2>';
                } else {
                    resultado += '<strong>Incorrecta</strong> ya que fue <h3>Crist&oacute;bal Col&oacute;n</h3>';
                }
                break;
            case 'portugal':
                resultado += 'Usted ha indicado que la capital de Portugal es:' +
                             '<h3>' + req.query.respuesta + '</h3>' +
                             'y su respuesta es: ';

                if (req.query.respuesta.match(/^lisboa$/i) !== null) {
                    resultado += '<h2>Correcta</h2>';
                } else {
                    resultado += '<strong>Incorrecta</strong> ya que es <h3>Lisboa</h3>';
                }
                break;
            default:
                res.redirect('/preguntas');
                break;
        }

        resultado += '<div><button onclick="window.history.back();">Volver</button></div></body></html>';

        res.send(resultado);
    } catch (e) {
        res.redirect('/preguntas');
    }
});

app.get('*', function (req, res) {
    res.redirect('/preguntas');
});

app.listen(8000);

console.log('Server running at http://localhost:8000/');
