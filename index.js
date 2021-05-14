/**
 * dataFactory - factory function
 */
const dataFactory = () => {
    
    /**
     * initRecettes - initialise les données de la recette dans le tableau arrayRecettes
     * @param  {Int} id id de la recette
     * @param  {String} name nom de la recette
     * @param  {Int} servings nombre de personne qui peuvent être servies
     * @param  {Array} ingredients ingrédients de la recette
     * @param  {Int} time temps de préparation
     * @param  {String} description description de la recette
     * @param  {String} appliance appareil utilisé
     * @param  {Array} ustensils ustensile utilisé
     */
    const initRecettes = (id, name, servings, ingredients, time, description, appliance, ustensils) => {
        arrayRecettes.push({ id, name, servings, ingredients, time, description, appliance, ustensils });
    };

    /**
     * initIngredient - initialise les ingrédients de la recette
     * @param  {Array} ingredient ingrédients de la recette
     */
    const initIngredient = (ingredient) => {
        arrayIngredients.push(ingredient);
    };

    /**
     * initAppareil - initialise l'appareil de la recette
     * @param  {String} appareil appareil de la recette
     */
    const initAppareil = (appareil) => {
        arrayAppareils.push(appareil);
    };

    /**
     * initUstensil - initialise les ustensils de la recette
     * @param  {Array} ustensil ustensils de la recette
     */
    const initUstensil = (ustensil) => {
        arrayUstensils.push(ustensil);
    };

    /**
     * setRecettes - entre les recettes filtreés dans le tableau arrayRecettes
     * @param  {Array} dataRecettes tableau contenant les recettes filtrées 
     */
    const setRecettes = (dataRecettes) => {
        arrayRecettes = dataRecettes;
    };
    
    /**
     * setIngredient - entre les ingrédients filtreés dans le tableau arrayIngrédients
     * @param  {Array} dataIngredients tableau contenant les ingrédients filtrées 
     */
    const setIngredient = (dataIngredients) => {
        arrayIngredients = dataIngredients;
    };
    
    /**
     * setAppareil - entre les appareils filtreés dans le tableau arrayAppareils
     * @param  {Array} dataAppareils tableau contenant les appareils filtrées 
     */
    const setAppareil = (dataAppareils) => {
        arrayAppareils = dataAppareils;
    };

    /**
     * setUstensil - entre les ustensils filtreés dans le tableau arrayUstensils
     * @param  {Array} dataUstensils tableau contenant les ustensils filtrées 
     */
    const setUstensil = (dataUstensils) => {
        arrayUstensils = dataUstensils;
    };
    
    /**
     * getRecettes - retourne le tableau arrayRecettes
     * @return  {Array} arrayRecettes contenant les recettes 
     */
    const getRecettes = () => {
        return arrayRecettes;
    };
    
    /**
     * getIngredients - retourne le tableau arrayIngredients
     * @return  {Array} arrayIngredients contenant les ingrédients des recettes 
     */
    const getIngredients = () => {
        return arrayIngredients;
    };
    
    /**
     * getAppareils - retourne le tableau arrayAppareils
     * @return  {Array} arrayAppareils contenant les appareils des recettes 
     */
    const getAppareils = () => {
        return arrayAppareils;
    };
    
    /**
     * getUstensils - retourne le tableau arrayUstensils
     * @return  {Array} arrayUstensils contenant les ustensils des recettes 
     */
    const getUstensils = () => {
        return arrayUstensils;
    };

    return {
        initRecettes,
        initIngredient,
        initAppareil,
        initUstensil,
        setRecettes,
        setIngredient,
        setAppareil,
        setUstensil,
        getRecettes,
        getIngredients,
        getAppareils,
        getUstensils
    };
};

fetch('data.json')
    .then(response => response.json())
    .then(data => initDataPage(data));

const factory = dataFactory();
let arrayRecettes = [];
let arrayIngredients = [];
let arrayAppareils = [];
let arrayUstensils = [];
const section1 = document.querySelector('section:nth-of-type(1)');
const section2 = document.querySelector('section:nth-of-type(2)');
const divIngredient = document.querySelector('#divIngredients');
const divAppareil = document.querySelector('#divAppareils');
const divUstensile = document.querySelector('#divUstensiles');
const idListIngredient = document.querySelector('#listIngredients');
const idListAppareil = document.querySelector('#listAppareils');
const idListUstensil = document.querySelector('#listUstensiles');
const arrayEvent = ['click', 'keypress'];

/**
 * initDataPage - initialise la page
 * @param  {Array} data liste des recettes
 */
const initDataPage = (data) => {
    initDataRecettes(data);
    initHtmlRecettes();
    initListIngredients();
    initListAppareils();
    initListUstensils();
    handleDivList();
};

/**
 * initDataRecettes - envoie les données de la recette à la factory
 * @param  {Array} data liste des recettes
 */
const initDataRecettes = (data) => {
    data.forEach(recette => {
        factory.initRecettes(recette.id, recette.name, recette.servings, recette.ingredients, recette.time, recette.description, recette.appliance, recette.ustensils);
    });
};

/**
 * initHtmlRecettes - stock les recettes dans la variable htmlRecettes
 */
const initHtmlRecettes = () => {
    const data = factory.getRecettes();
    let htmlRecetteIngredients = '';
    let htmlRecettes = '';
    for (let i = 0; i < data.length; i++) {
        for (let y = 0; y < data[i].ingredients.length; y++) {
            htmlRecetteIngredients += `${data[i].ingredients[y].ingredient}: ${data[i].ingredients[y].quantity} ${(data[i].ingredients[y].unit || '')}<br>`;
        }
    }
    data.forEach(recette => {
        htmlRecettes += `<article tabindex="0"><aside><h2 title="${recette.name}">${recette.name}</h2>
        <p class="time"><i class="far fa-clock"></i> ${recette.time} min</p>
        <p class="ingrédients" title="${htmlRecetteIngredients}">${htmlRecetteIngredients}</p>
        <p class="description" title="${recette.description}">${recette.description}</p></aside></article>`;
    });
    displayListRecettes(htmlRecettes);
};

/**
 * displayListRecettes - affiche la liste des recettes dans le html
 * @param  {String} htmlRecettes liste des recettes en html 
 */
const displayListRecettes = (htmlRecettes) => {
    let icone = document.querySelector('header > a > img:nth-of-type(1)');
    section2.innerHTML = htmlRecettes;
    icone.style.marginLeft = '0em';
    icone.style.marginBottom = '0.5em';
    icone.style.transform = 'rotate(0deg)  scale(1)';
    setTimeout(() => {
        section1.style.opacity = 1;
        section2.style.opacity = 1;
    }, 1000);
};

/**
 * initListIngredients - envoie chaque ingrédient unique dans chaque recette à la factory
 */
const initListIngredients = () => {
    const recettes = factory.getRecettes();
    for (let i = 0; i < recettes.length; i++) {
        for (let y = 0; y < recettes[i].ingredients.length; y++) {
            let ingredient = recettes[i].ingredients[y].ingredient;
            ingredient = ingredient.charAt(0).toUpperCase() + ingredient.substring(1).toLowerCase();
            factory.initIngredient(ingredient);
        }
    }
    let listIngredients = factory.getIngredients();
    listIngredients = Array.from(new Set(listIngredients));
    factory.setIngredient(listIngredients);
    displayListFiltre(listIngredients, idListIngredient);
};

/**
 * initListAppareils - envoie chaque appareil unique dans chaque recette à la factory
 */
const initListAppareils = () => {
    const recettes = factory.getRecettes();
    for (let i = 0; i < recettes.length; i++) {
        factory.initAppareil(recettes[i].appliance);
    }
    let listAppareils = factory.getAppareils();
    listAppareils = Array.from(new Set(listAppareils));
    factory.setAppareil(listAppareils);
    displayListFiltre(listAppareils, idListAppareil);
};

/**
 * initListUstensils - envoie chaque ustensil unique dans chaque recette à la factory
 */
const initListUstensils = () => {
    const recettes = factory.getRecettes();
    for (let i = 0; i < recettes.length; i++) {
        for (let y = 0; y < recettes[i].ustensils.length; y++) {
            let ustensil = recettes[i].ustensils[y];
            ustensil = ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase();
            factory.initUstensil(ustensil);
        }
    }
    let listUstensils = factory.getUstensils();
    listUstensils = Array.from(new Set(listUstensils));
    factory.setUstensil(listUstensils);
    displayListFiltre(listUstensils, idListUstensil);
};

/**
 * displayListFiltre - affiche la liste reçue dans son élément id reçu
 * @param  {Array} arrayList liste d'ingrédients ou d'appareils ou d'ustensiles uniques
 * @param  {Array} idElement élément id dom html
 */
const displayListFiltre = (arrayList, idElement) => {
    let htmlListFiltre = '';
    arrayList.forEach(element => {
        htmlListFiltre += `<span tabindex="0">${element}</span>`;
    });

    idElement.innerHTML = htmlListFiltre;
};

/**
 * handleDivList - ouvre le div list lorsque que l'élément est click ou keypress
 */
const handleDivList = () => {
    arrayEvent.forEach(event => {
        [divIngredient, divAppareil, divUstensile].forEach(element => {
            element.querySelector('.fa-chevron-up').addEventListener(event, () => {
                if(element.style.width === '87px') {
                    // On ferme tous les divList
                    for (let i = 0; i < 3; i++) {
                        let divList = section1.querySelectorAll('.divList')[i];
                        divList.style.width = '87px';
                        divList.style.minWidth = 'initial';
                        divList.style.height = '19.7px';
                        divList.style.filter = 'brightness(100%)';
                        divList.querySelector('.fa-chevron-up').style.transform = 'rotate(180deg)';
                        divList.querySelector('div').style.display = 'none';
                    }
                    divIngredient.querySelector('span').textContent = 'Ingédients';
                    divAppareil.querySelector('span').textContent = 'Appareils';
                    divUstensile.querySelector('span').textContent = 'Ustensiles';
                    if (element === divAppareil) { element.style.width = '19%'; element.style.minWidth = '185px'; }
                    else { element.style.width = '90%'; }
                    element.style.height = '251px';
                    if (element === divIngredient) {
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un ingédient" aria-label="Rechercher un ingédient" name="searchIngredient" id="searchIngredient" class="searchInputList">';
                    } else if (element === divAppareil) {
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un appareil" aria-label="Rechercher un appareil" name="searchAppareil" id="searchAppareil" class="searchInputList">';
                    } else if (element === divUstensile) {
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un ustensile" aria-label="Rechercher un ustensile" name="searchUstensile" id="searchUstensile" class="searchInputList">';
                    }
                    element.style.filter = 'brightness(95%)';
                    element.querySelector('.fa-chevron-up').style.transform = 'rotate(0deg)';
                    element.querySelector('div').style.display = 'flex';
                } else {
                    closeDivList(element);
                }
            });
        });
    });
};

/**
 * closeDivList - ferme l'element passé
 * @param  {Array} element élément html du dom
 */
const closeDivList = (element) => {
    divIngredient.querySelector('span').textContent = 'Ingédients';
    divAppareil.querySelector('span').textContent = 'Appareils';
    divUstensile.querySelector('span').textContent = 'Ustensiles';
    element.style.width = '87px';
    element.style.minWidth = 'initial';
    element.style.height = '19.7px';
    element.style.filter = 'brightness(100%)';
    element.querySelector('.fa-chevron-up').style.transform = 'rotate(180deg)';
    element.querySelector('div').style.display = 'none';
};