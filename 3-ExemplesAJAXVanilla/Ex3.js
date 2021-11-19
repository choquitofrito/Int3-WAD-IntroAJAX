document.getElementById("btn_obtenir").addEventListener("click", (event) => {
    event.preventDefault();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                
                let listeUl = document.getElementById("liste_villes");

                let arrayVillesJS = JSON.parse (xhr.responseText);

                for (index in arrayVillesJS){    
                    let elemLi = document.createElement ("LI");
                    let textLi = document.createTextNode (arrayVillesJS[index]);
                    elemLi.appendChild (textLi); // mettre le texte dans le LI
                    listeUl.appendChild (elemLi); // rajouter le LI au UL
                }

                // JSON.parse prend un STRING JSON et crée l'objet correspondant
                console.log (xhr.responseText);
                console.log (typeof(xhr.responseText));
                console.log (JSON.parse(xhr.responseText));
                console.log (typeof(JSON.parse(xhr.responseText)));


                // obtenir l'array de PHP 

            }
        }
    }
    xhr.open("GET", "./Ex3FormulaireTraitement.php")
    
    xhr.send(null); 
});