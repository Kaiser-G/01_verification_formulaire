alert("rentrez votre salaire");

function verif(e) {
  alert("Vérification en cours");

  let longueur = $("#saisi").val().length;
  let salaire = $("#saisi");

  if (longueur == 0) {
    alert("rentrez quelque chose !!!");
    e.preventDefault(); // annule le submit
  }

  if (isNaN($(salaire).val())) {
    alert("rentrez votre salaire en numérique");
    e.preventDefault(); // annule le submit
  }
}

// Le programme PRINCIPAL
$(document).ready(function () {
  $("#btn").click(verif);
});
