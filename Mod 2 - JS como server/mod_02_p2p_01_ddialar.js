function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;

  return {
    "titulo":function(){ return _titulo; },
    "meter":function(nombre, tf){ _contenido[nombre]=tf; },
    "tf":function(nombre){ return _contenido[nombre]; },
    "borrar":function(nombre){ delete _contenido[nombre]; },
    "toJSON":function(){ return JSON.stringify(_contenido); },
    "listar":function(){
      var result = this.toJSON();

      // result contiene {"Pepe":113278561,"José":157845123,"Jesús":178512355}
      // Para obtener el resultado solicitado...

      result = result.replace(/[{}]/g, ''); // Elimino las llaves.
      result = result.replace(/\"/g, '');   // Elimino las dobles comillas.
      result = result.replace(/,/g, '\n');  // Sustituyo las comas por retornos de carro.
      result = result.replace(/:/g, ': ');  // Finalmente, separo el nombre del número.

      console.log(result);
    }
  };
}

var amigos = agenda ("Amigos",
                    {
                      Pepe:113278561,
                      José:157845123,
                      Jesús:178512355
                    });

(function(){
  amigos.listar();
})();
