//pour l'exo 01

alert("Entrez votre nom");

function verif(e) {
  alert("Vérification de votre nom");
  let longueur = $("#nom").val().length;

  if (longueur < 2 || longueur > 5) {
    alert("Le nom doit contenir entre 2 et 5 caractères");
    $("#nom").css("background-color", "red");
    e.preventDefault(); // annule le submit
  } else {
    alert("merci");
    $("#nom").css("background-color", "lightgreen");
    e.preventDefault(); // annule le submit
  }
}

// Le programme PRINCIPAL
$(document).ready(function () {
  $("#btn").click(verif);
});
