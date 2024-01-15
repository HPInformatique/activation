function envoi_clé_produit() {
  // Ancien : document.getElementById('cledeproduit1').innerHTML = 'Votre clé de produit est :';


  
  const selecteur = document.getElementById("logiciel");
  const monChoix = selecteur[selecteur.selectedIndex];
  
    if (monChoix.value == "nteprnter") {
      document.getElementById('cledeproduit2').innerHTML = '2Q41D-S415D-S145E-S147D-DEJK7';
    }
    
    if (monChoix.value == "verrpc") {
      document.getElementById('cledeproduit2').innerHTML = 'Q45F7-Q14D7-ZMLB4-7DF16-02GB4';
    }
  
    if (monChoix.value == "verrfrfx") {
      document.getElementById('cledeproduit2').innerHTML = '2A58D-5D7GN-GH41J-625Y8-215F4';
    }
  
    if (monChoix.value == "err") {
      document.getElementById('cledeproduit2').innerHTML = '[SELECTIONNNEZ UN PRODUIT]';
    }
  
  
  

  // Ancien :  document.getElementById('cledeproduit3').innerHTML = "Merci d'avoir choisi HP Informatique";
}


