fetch('data.json')
    .then(response => response.json())
    .then(data => initDataPage(data))

class Recettes {
    constructor(id, name, servings, ingredients, time, description, appliance, ustensils) {
        this.id = id,
        this.name = name,
        this.servings = servings,
        this.ingredients = ingredients,
        this.time = time,
        this.description = description,
        this.appliance = appliance,
        this.ustensils = ustensils
    }
}

let section1 = document.querySelector('section:nth-of-type(1)');
let section2 = document.querySelector('section:nth-of-type(2)');
const listIngredient = document.querySelector('#listIngredients');
const listAppareil = document.querySelector('#listAppareils');
const listUstensils = document.querySelector('#listUstensiles');
const arrayEvent = ['click', 'keypress'];

/**
 * initDataPage - initialise la liste des données
 * @param  {Array} data liste des recettes
 */
function initDataPage (data) {
    initDataRecettes(data);
    initHtmlRecettes(data);
    initListIngredients();
    initListAppareils();
    initListUstensils();
    handleDivList();
}

/**
 * initDataRecettes - formate les données dans avec la class Recettes et le stock dans le localStorage
 * @param  {Array} data liste des recettes
 */
function initDataRecettes(data) {
    let arrayRecettes = [];
    data.forEach(recette => {
        arrayRecettes.push(new Recettes(recette.id, recette.name, recette.servings, recette.ingredients, recette.time, recette.description, recette.appliance, recette.ustensils));
    });
    localStorage.setItem('Recettes', JSON.stringify(arrayRecettes));
}

/**
 * initHtmlRecettes - stock les recettes dans la variable htmlRecettes
 * @param  {Array} data liste des recettes
 */
function initHtmlRecettes(data) {
    let htmlRecetteIngredients = "";
    let htmlRecettes = "";
    for (let i = 0; i < data.length; i++) {
        for (let y = 0; y < data[i].ingredients.length; y++) {
            htmlRecetteIngredients += "" + data[i].ingredients[y].ingredient + ": " + data[i].ingredients[y].quantity  + " " + (data[i].ingredients[y].unit || "") + "<br>";
        }
    }
    data.forEach(recette => {
        htmlRecettes += "<article tabindex=\"0\"><aside><h2 title=\"" + recette.name + "\">" + recette.name + "</h2><p class=\"time\"><i class=\"far fa-clock\"></i> "
        + recette.time + " min</p><p class=\"ingrédients\" title=\"" + htmlRecetteIngredients + "\">" + htmlRecetteIngredients + "</p><p class=\"description\" title=\"" + recette.description + "\">"
        + recette.description + "</p></aside></article>";
    });
    displayListRecettes(htmlRecettes);
}

/**
 * displayListRecettes - affiche la liste des recettes dans le html
 * @param  {String} htmlRecettes liste des recettes en html 
 */
function displayListRecettes(htmlRecettes) {
    let icone = document.querySelector('header > a > img:nth-of-type(1)');
    section2.innerHTML = htmlRecettes;
    icone.style.marginLeft = "0em";
    icone.style.marginBottom = "0.5em";
    icone.style.transform = "rotate(0deg)  scale(1)";
    setTimeout(() => {
        section1.style.opacity = 1;
        section2.style.opacity = 1;
    }, 1000);

}

/**
 * initListIngredients - récupère chaque ingrédient unique dans chaque recette
 */
function initListIngredients() {
    const Recettes = JSON.parse(localStorage.getItem('Recettes'));
    let arrayListIngredients = [];
    for (let i = 0; i < Recettes.length; i++) {
        for (let y = 0; y < Recettes[i].ingredients.length; y++) {
            let ingredient = Recettes[i].ingredients[y].ingredient;
            ingredient = ingredient.charAt(0).toUpperCase() + ingredient.substring(1).toLowerCase();
            arrayListIngredients.push(ingredient);
        }
    }
    arrayListIngredients = Array.from(new Set(arrayListIngredients));
    displayListFiltre(arrayListIngredients, listIngredient);
}

/**
 * initListAppareils - récupère chaque appareil unique dans chaque recette
 */
function initListAppareils() {
    const Recettes = JSON.parse(localStorage.getItem('Recettes'));
    let arrayListAppareils = [];
    for (let i = 0; i < Recettes.length; i++) {
            arrayListAppareils.push(Recettes[i].appliance);
    }
    arrayListAppareils = Array.from(new Set(arrayListAppareils));
    displayListFiltre(arrayListAppareils, listAppareil);
}

/**
 * initListUstensils - récupère chaque ustensil unique dans chaque recette
 */
 function initListUstensils() {
    const Recettes = JSON.parse(localStorage.getItem('Recettes'));
    let arrayListUstensils = [];
    for (let i = 0; i < Recettes.length; i++) {
        for (let y = 0; y < Recettes[i].ustensils.length; y++) {
            let ustensil = Recettes[i].ustensils[y];
            ustensil = ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase();
            arrayListUstensils.push(ustensil);
        }
    }
    arrayListUstensils = Array.from(new Set(arrayListUstensils)); 
    displayListFiltre(arrayListUstensils, listUstensils);
}

/**
 * displayListFiltre - affiche la liste reçue dans son élément id reçu
 * @param  {Array} arrayList liste d'ingrédients ou d'appareils ou ustensiles uniques
 * @param  {Array} idElement élément dom html
 */
function displayListFiltre (arrayList, idElement) {
    htmlListFiltre = "";
    arrayList.forEach(element => {
        htmlListFiltre += "<span tabindex=\"0\">" + element + "</span>";
    });

    idElement.innerHTML = htmlListFiltre;
}

/**
 * handleDivList - ouvre le div list lorsque que l'élément est click ou keypress
 */
function handleDivList() {
    const section = document.querySelector('section:nth-of-type(1)');
    let divIngredient = document.querySelector('#divIngredients');
    let divAppareil = document.querySelector('#divAppareils');
    let divUstensile = document.querySelector('#divUstensiles');
    arrayEvent.forEach(event => {
        [divIngredient, divAppareil, divUstensile].forEach(element => {
            element.addEventListener(event, () => {
                if(element.style.width === "87px") {
                    // On ferme tous les divList
                    for (let i = 0; i < 3; i++) {
                        let divList = section.querySelectorAll('.divList')[i];
                        divList.style.width = "87px";
                        divList.style.minWidth = "initial";
                        divList.style.height = "19.7px";
                        divList.style.filter = "brightness(100%)";
                        divList.querySelector('span').style.opacity = 1;
                        divList.querySelector('.fa-chevron-up').style.transform = "rotate(180deg)";
                        divList.querySelector('div').style.display = "none";
                    }
                    divIngredient.querySelector('span').textContent = "Ingédients";
                    divAppareil.querySelector('span').textContent = "Appareils";
                    divUstensile.querySelector('span').textContent = "Ustensiles";
                    if (element === divAppareil) { element.style.width = "19%"; element.style.minWidth = "185px"; }
                    else { element.style.width = "90%"; }
                    element.style.height = "251px";
                    if (element === divIngredient) {
                        element.querySelector('span').textContent = "Rechercher un ingédient";
                    } else if (element === divAppareil) {
                        element.querySelector('span').textContent = "Rechercher un appareil";
                    } else if (element === divUstensile) {
                        element.querySelector('span').textContent = "Rechercher un ustensils";
                    }
                    element.style.filter = "brightness(95%)";
                    element.querySelector('span').style.opacity = 0.5;
                    element.querySelector('.fa-chevron-up').style.transform = "rotate(0deg)";
                    element.querySelector('div').style.display = "flex";
                } else {
                    divIngredient.querySelector('span').textContent = "Ingédients";
                    divAppareil.querySelector('span').textContent = "Appareils";
                    divUstensile.querySelector('span').textContent = "Ustensiles";
                    element.style.width = "87px";
                    element.style.minWidth = "initial";
                    element.style.height = "19.7px";
                    element.style.filter = "brightness(100%)";
                    element.querySelector('span').style.opacity = 1;
                    element.querySelector('.fa-chevron-up').style.transform = "rotate(180deg)";
                    element.querySelector('div').style.display = "none";
                }
            });
        });
    });
}