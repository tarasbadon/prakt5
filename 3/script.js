window.onload = function() {

  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");


  buttonG.addEventListener("click", function() {
    var x = -9;
  var y = Math.abs(x);
alert("Результат обчислення модуля |-9| = " + y);
  });

  buttonGr.addEventListener("click", function() {
   var x = 0;
var y = Math.cos(x);

alert("Результат обчислення косинуса нуля радіан = " + y);
 });

  buttonC.addEventListener("click", function() {
   var x = Math.PI; 
  var y = Math.cos(x);

alert("Результат обчислення косинуса 180 градусів (π радіан) =  " + y);

  });

  buttonCI.addEventListener("click", function() {
   var x = 0;
var y = Math.acos(x);

alert("Результат обчислення арккосинуса нуля = " + y);
 });

  buttonSH.addEventListener("click", function() {
   var x = 0;
var y = Math.sin(x);

alert("Результат обчислення синуса нуля радіан =  " + y);

  });
};
