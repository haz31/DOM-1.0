 document.getElementById("root").innerHTML = "On teste le JS ";
 
 var newUL = document.createElement("ul");
 
 var div = document.getElementById("root");
 
 div.appendChild(newUL);

 var newli = document.createElement('li');
 newli.innerHTML = "Lorem ipsum dolor sit amet, consectetur.";
 newUL.appendChild(newli);

 var newli2 = document.createElement('li');
 newli2.innerHTML = "Lorem ipsum dolor sit";
 newUL.appendChild(newli2);

 var newli3 = document.createElement('li');
 newli3.innerHTML = "Lorem ipsum dolor sit amet, consectetur.";
 newUL.appendChild(newli3);

 var newli4 = document.createElement('li');
 newli4.innerHTML = "Lorem ipsum dolor sit amet, consectetur.";
 newUL.appendChild(newli4);

 var newli5 = document.createElement('li');
 newli5.innerHTML = "Lorem ipsum dolor sit amet, consectetur.";
 newUL.appendChild(newli5);





function myFunction() {
 var txt; 
 var person = prompt("Entrez votre Nom:",); 
 if (person == null || person == "") {
  txt = "Au revoir."; 
  } else { 
    txt = "Bonjour, je m'apelle " + person ; } 
  document.getElementById("tartanpion").innerHTML = txt; 
}


