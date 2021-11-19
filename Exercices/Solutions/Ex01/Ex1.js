document.getElementById("btn_obtenir").addEventListener("click", (event) => {
    event.preventDefault(); // dans ce cas, arreter le submit

    // créer l'objet xhr
    let xhr = new XMLHttpRequest();
    console.log(xhr.readyState);

    // définir l'action à lancer à chaque changement de readyState
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { // état de chargement de la reponse du serveur, fini
            if (xhr.status == 200) { // reponse du serveur, succés
                document.getElementById("div_message").innerHTML = xhr.responseText;
            }
            else if (xhr.status == 404){
                window.location.href = "./404.html";
            }
        }
    };

    // créer et lancer la requête au serveur
    xhr.open('GET', 'Ex1FormTraitement.php');
    // xhr.open('GET', 'Ex1FormButtonTextTraitementooo.php'); // test 404
    xhr.send(null);
}
);