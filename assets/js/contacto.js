
// Utiliza JavaScript para eliminar un estilo específico
document.addEventListener("DOMContentLoaded", function() {
  var estiloABorrar = document.querySelector('link[href="tu-estilo.css"]');
  var hojaDeEstilo = estiloABorrar.sheet;
  
  // Itera a través de las reglas de la hoja de estilo y elimina la que desees
  for (var i = 0; i < hojaDeEstilo.cssRules.length; i++) {
    var regla = hojaDeEstilo.cssRules[i];
    if (regla.selectorText === 'body') {
      hojaDeEstilo.deleteRule(i);
      break;
    }
  }
});
