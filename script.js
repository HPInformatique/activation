function afficher_le_code() {
  window.open("https://sites.google.com/view/hpinformatique-espacemembre/code-activation", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=500,width=400,height=400");
}

function verif_code() {
  var reponse = document.getElementById("zone_code").value; // Pour récupérer la valeur entrée

  //                ↓ Le code
  if (reponse == '268775') { 
      window.location.href="suitep2o3i4ujhrfgre3y784i50tfr8d7eyz3g45tryudi9e847uy5gt3e0rt98ureh3g4t5r78e9rf7ygetyrtui657.html"
      let stateObj = { id: "100" };
              window.history.replaceState(stateObj,
                          "Centre d'activation - HP Informatique", "/code-vérifié");
  }
  else { 
    document.getElementById('zone_code').value = ""
    alert('Le code entré est incorrect'); 
       }
}