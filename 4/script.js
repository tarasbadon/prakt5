window.onload = function() {

  var buttonG = document.getElementById("G");



  buttonG.addEventListener("click", function() {
 for (var i = -6; i <= 6; i = i + 2) {
  var x = i;
  
  if (x <= -1) {
     x = Math.sin(x) + Math.tan(x);
  }
  
  if (-1 < x <= 2) {
    x = x^2 + 2 * x^3;
  }
  
  if (1 > x) {
    x = Math.sqrt(x^3) - Math.e^x;
  }

   alert("Результати розрахунків при аргументі " + i + " = " + x);
}

  });

};
