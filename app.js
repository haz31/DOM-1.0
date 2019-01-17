 document.getElementById("root").innerHTML = "On teste le JS ";
 
 var newUL = document.createElement("ul");
 
 var div = document.getElementById("root");
 
 div.appendChild(newUL);

 var tableau = ["fraise","pomme","abricot","peche","cerise",]; 

 for ( var i = 0; i < 5; i++){
 	  var newLI = document.createElement("li");
 	  newLI.innerHTML = tableau[i];
 	  newUL.appendChild(newLI);
 }





function myFunction() {
 var txt; 
 var person = prompt("Entrez votre Nom:",); 
 if (person == null || person == "") {
  txt = "Au revoir."; 
  } else { 
    txt = "Bonjour, je m'apelle " + person ; } 
  document.getElementById("tartanpion").innerHTML = txt; 
}


