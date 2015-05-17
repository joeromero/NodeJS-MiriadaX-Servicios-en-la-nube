
function mostrarNumeroPi(){
  console.log(Math.PI.toPrecision(9));
}

function mostrarLineasEnBlanco(numeroDeLineas){
  for (var i = 0; i < numeroDeLineas; i++)  {
    console.log('');
  }
}

function mostrarCaracteresUnicode(caracteres){
  var result = '';
  result = caracteres.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
      return String.fromCharCode(parseInt(grp, 16));
  });
  result = unescape(result);
  console.log(result);
  console.log(caracteres);
}

(function(){
  mostrarNumeroPi();
  mostrarLineasEnBlanco(2);
  mostrarCaracteresUnicode("\u55e8\uff0c\u4f60\u597d\u5417");
})();
