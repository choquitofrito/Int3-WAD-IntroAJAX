document.getElementById("envoyer").addEventListener("click", (event) => {
    event.preventDefault();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById("div_phrase").innerHTML = xhr.responseText;
            }
        }
    }
    // créer un objet FormData en JS pour l'envoyer
    let formulaire = new FormData (document.getElementById("formulaireEnvoi"));

    xhr.open("POST", "./Ex2FormulaireEnvoiTraitement.php")
    
    // send a maintenant un argument: le FormData à envoyer
    xhr.send(formulaire); // envoyer le formulaire, pas null!
});