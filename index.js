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
     * initTagIngredient - initialise le tag ingrédient de la recette dans le tableau arrayTagIngredients
     * @param  {String} tagIngredient tag ingrédient de la recette
     */
    const initTagIngredient = (tagIngredient) => {
        arrayTagIngredients.push(tagIngredient);
    };

    /**
     * initAppareil - initialise l'appareil de la recette
     * @param  {String} appareil appareil de la recette
     */
    const initAppareil = (appareil) => {
        arrayAppareils.push(appareil);
    };

    /**
     * initTagAppareil - initialise le tag appareil de la recette dans le tableau arrayTagAppareils
     * @param  {String} tagAppareil tag appareil de la recette
     */
    const initTagAppareil = (tagAppareil) => {
        arrayTagAppareils.push(tagAppareil);
    };

    /**
     * initUstensil - initialise les ustensils de la recette
     * @param  {Array} ustensil ustensils de la recette
     */
    const initUstensil = (ustensil) => {
        arrayUstensils.push(ustensil);
    };

    /**
     * initTagUstensil - initialise le tag ustensil de la recette dans le tableau arrayTagUstensils
     * @param  {String} tagUstensil tag ustensil de la recette
     */
    const initTagUstensil = (tagUstensil) => {
        arrayTagUstensils.push(tagUstensil);
    };

    /**
     * setRecettes - entre les recettes filtreés dans le tableau arrayRecettes
     * @param  {Array} dataRecettes tableau contenant les recettes filtrées 
     */
    const setRecettes = (dataRecettes) => {
        arrayRecettes = dataRecettes;
    };
    
    /**
     * setOrigineRecettes - entre les recettes dans le tableau arrayOrigineRecettes
     * @param  {Array} dataRecettes tableau contenant les recettes 
     */
    const setOrigineRecettes = (dataRecettes) => {
        arrayOrigineRecettes = dataRecettes;
    };

    /**
     * setIngredient - entre les ingrédients filtreés dans le tableau arrayIngrédients
     * @param  {Array} dataIngredients tableau contenant les ingrédients filtrées 
     */
    const setIngredient = (dataIngredients) => {
        arrayIngredients = dataIngredients;
    };

    /**
     * setTagIngredient - entre les tags ingrédients dans le tableau arrayTagIngrédients
     * @param  {Array} dataTagIngredients tableau contenant les tags ingrédients 
     */
    const setTagIngredient = (dataTagIngredients) => {
        arrayTagIngredients = dataTagIngredients;
    };

    /**
     * setAppareil - entre les appareils filtreés dans le tableau arrayAppareils
     * @param  {Array} dataAppareils tableau contenant les appareils filtrées 
     */
    const setAppareil = (dataAppareils) => {
        arrayAppareils = dataAppareils;
    };
    
    /**
     * setTagAppareil - entre les tags appareils dans le tableau arrayTagAppareils
     * @param  {Array} dataTagAppareils tableau contenant les tags appareils 
     */
    const setTagAppareil = (dataTagAppareils) => {
        arrayTagAppareils = dataTagAppareils;
    };

    /**
     * setUstensil - entre les ustensils filtreés dans le tableau arrayUstensils
     * @param  {Array} dataUstensils tableau contenant les ustensils filtrées 
     */
    const setUstensil = (dataUstensils) => {
        arrayUstensils = dataUstensils;
    };
        
    /**
     * setTagUstensil - entre les tags ustensils dans le tableau arrayTagUstensils
     * @param  {Array} dataTagUstensils tableau contenant les tags ustensils 
     */
    const setTagUstensil = (dataTagUstensils) => {
        arrayTagUstensils = dataTagUstensils;
    };

    /**
     * getRecettes - retourne le tableau arrayRecettes
     * @return  {Array} arrayRecettes contenant les recettes 
     */
    const getRecettes = () => {
        return arrayRecettes;
    };
    
    /**
     * getOrigineRecettes - retourne le tableau arrayOrigineRecettes
     * @return  {Array} arrayOrigineRecettes contenant les recettes 
     */
    const getOrigineRecettes = () => {
        return arrayOrigineRecettes;
    };
    
    /**
     * getIngredients - retourne le tableau arrayIngredients
     * @return  {Array} arrayIngredients contenant les ingrédients des recettes 
     */
    const getIngredients = () => {
        return arrayIngredients;
    };
    
    /**
     * getTagIngredients - retourne le tableau arrayTagIngredients
     * @return  {Array} arrayTagIngredients contenant les tags ingrédients des recettes ajoutées 
     */
    const getTagIngredients = () => {
        return arrayTagIngredients;
    };
    
    /**
     * getAppareils - retourne le tableau arrayAppareils
     * @return  {Array} arrayAppareils contenant les appareils des recettes 
     */
    const getAppareils = () => {
        return arrayAppareils;
    };
        
    /**
     * getTagAppareils - retourne le tableau arrayTagAppareils
     * @return  {Array} arrayTagAppareils contenant les tags appareils des recettes ajoutées 
     */
    const getTagAppareils = () => {
        return arrayTagAppareils;
    };

    /**
     * getUstensils - retourne le tableau arrayUstensils
     * @return  {Array} arrayUstensils contenant les ustensils des recettes 
     */
    const getUstensils = () => {
        return arrayUstensils;
    };
        
    /**
     * getTagUstensils - retourne le tableau arrayTagUstensils
     * @return  {Array} arrayTagUstensils contenant les tags ustensils des recettes ajoutées 
     */
    const getTagUstensils = () => {
        return arrayTagUstensils;
    };

    /**
     * searchRecettes - filtre le tableau arrayRecettes en function de la valeur search passée
     * @param  {String} search valeur passée dans la barre de recherche
     * @returns {Array} renvoie le tableau arrayRecettes filtrée
     */
    const searchRecettes = (search) => {
        let resultSearch = [];
        resultSearch.push(arrayRecettes.filter(recette => {
            return recette.name.toLowerCase().includes(search);
        }));

        resultSearch.push(arrayRecettes.filter(recette => {
            for (let i = 0; i < recette.ingredients.length; i++) {
                if (recette.ingredients[i].ingredient.toLowerCase().includes(search) === true) {
                    return true;
                }
            }
        }));

        resultSearch.push(arrayRecettes.filter(recette => {
            return recette.description.toLowerCase().includes(search);
        }));

        let arraySearch = [];
        for (let i = 0; i < resultSearch.length; i++) {
            for (let y = 0; y < resultSearch[i].length; y++) {
                arraySearch.push(resultSearch[i][y]);
            }
        }
        return arraySearch = Array.from(new Set(arraySearch));
    };
    
    /**
     * searchIngredient - filtre le tableau arrayIngredients en function de la valeur search passée
     * @param  {String} search valeur passée dans la barre de recherche
     * @returns {Array} renvoie le tableau arrayIngredients filtrée
     */
    const searchIngredient = (search) => {
        return arrayIngredients.filter(ingredient => {
            return ingredient.toLowerCase().includes(search);
        });
    };

    /**
     * filtreRecetteIngredient - filtre le tableau arrayRecettes en function des valeurs dans le tableau arrayTagIngredients
     * @param  {Array} array tableau contenant les recettes a filtrer
     * @param  {String} tagIngredient valeur tag ingrédient
     * @returns {Array} renvoie le tableau arrayRecettes filtrée
     */
    const filtreRecetteIngredient = (array, tagIngredient) => {
        return array.filter(recette => {
            for (let i = 0; i < recette.ingredients.length; i++) {
                if (recette.ingredients[i].ingredient.toLowerCase().includes(tagIngredient) === true) {
                    return true;
                }
            }
        });
    };
    
    /**
     * searchAppareil - filtre le tableau arrayAppareils en function de la valeur search passée
     * @param  {String} search valeur passée dans la barre de recherche
     * @returns {Array} renvoie le tableau arrayAppareils filtrée
     */
    const searchAppareil = (search) => {
        return arrayAppareils.filter(appareil => {
            return appareil.toLowerCase().includes(search);
        });
    };
    
    /**
     * filtreRecetteAppareil - filtre le tableau arrayAppareils en function des valeurs dans le tableau arrayTagAppareils
     * @param  {Array} array tableau contenant les recettes a filtrer
     * @param  {String} tagAppareil valeur tag appareil
     * @returns {Array} renvoie le tableau arrayAppareils filtrée
     */
    const filtreRecetteAppareil = (array, tagAppareil) => {
        return array.filter(recette => {
            return recette.appliance.toLowerCase().includes(tagAppareil);
        });
    };
    
    /**
     * searchUstensil - filtre le tableau arrayUstensils en function de la valeur search passée
     * @param  {String} search valeur passée dans la barre de recherche
     * @returns {Array} renvoie le tableau arrayUstensils filtrée
     */
    const searchUstensil = (search) => {
        return arrayUstensils.filter(ustensil => {
            return ustensil.toLowerCase().includes(search);
        });
    };

    /**
     * filtreRecetteUstensil - filtre le tableau arrayUstensils en function des valeurs dans le tableau arrayTagUstensils
     * @param  {Array} array tableau contenant les ustensils a filtrer
     * @param  {String} tagIngredient valeur tag ustensil
     * @returns {Array} renvoie le tableau arrayUstensils filtrée
     */
    const filtreRecetteUstensil = (array, tagUstensil) => {
        return array.filter(recette => {
            for (let i = 0; i < recette.ustensils.length; i++) {
                if (recette.ustensils[i].toLowerCase().includes(tagUstensil) === true) {
                    return true;
                }
            }
        });
    };
    
    return {
        initRecettes,
        initIngredient,
        initTagIngredient,
        initAppareil,
        initTagAppareil,
        initUstensil,
        initTagUstensil,
        setRecettes,
        setOrigineRecettes,
        setIngredient,
        setTagIngredient,
        setAppareil,
        setTagAppareil,
        setUstensil,
        setTagUstensil,
        getRecettes,
        getOrigineRecettes,
        getIngredients,
        getTagIngredients,
        getAppareils,
        getTagAppareils,
        getUstensils,
        getTagUstensils,
        searchRecettes,
        searchIngredient,
        filtreRecetteIngredient,
        searchAppareil,
        filtreRecetteAppareil,
        searchUstensil,
        filtreRecetteUstensil,
    };
};

fetch('data.json')
    .then(response => response.json())
    .then(data => initDataPage(data));

const factory = dataFactory();
let arrayRecettes = [];
let arrayOrigineRecettes = [];
let arrayIngredients = [];
let arrayTagIngredients = [];
let arrayAppareils = [];
let arrayTagAppareils = [];
let arrayUstensils = [];
let arrayTagUstensils = [];
const section1 = document.querySelector('header > aside');
const section2 = document.querySelector('section');
const divIngredient = document.querySelector('#divIngredients');
const divAppareil = document.querySelector('#divAppareils');
const divUstensile = document.querySelector('#divUstensiles');
const idListIngredient = document.querySelector('#listIngredients');
const idListAppareil = document.querySelector('#listAppareils');
const idListUstensil = document.querySelector('#listUstensiles');
const searchRecettes = document.querySelector('#search');
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
    handleSearchRecettes();
    handleSearchIngredient();
    handleSearchAppareil();
    handleSearchUstensil();
};

/**
 * initDataRecettes - envoie les données de la recette à la factory
 * @param  {Array} data liste des recettes
 */
const initDataRecettes = (data) => {
    data.forEach(recette => {
        factory.initRecettes(recette.id, recette.name, recette.servings, recette.ingredients, recette.time, recette.description, recette.appliance, recette.ustensils);
    });
    factory.setOrigineRecettes(factory.getRecettes());
};

/**
 * initHtmlRecettes - stock les recettes dans la variable htmlRecettes
 * @param  {Array} data liste des recettes recherchées
 */
const initHtmlRecettes = (data = false) => {
    if (!data) data = factory.getRecettes();
    let htmlRecettes = '';
    for (let i = 0; i < data.length; i++) {
        let htmlRecetteIngredients = '';
        for (let y = 0; y < data[i].ingredients.length; y++) {
            let ingredientUnit;
            let ingredientQuantity;
            if (data[i].ingredients[y].quantity !== undefined) ingredientQuantity = data[i].ingredients[y].quantity;
            else ingredientQuantity = '0';
            if (data[i].ingredients[y].unit !== undefined) ingredientUnit = data[i].ingredients[y].unit;
            else ingredientUnit = '';
            htmlRecetteIngredients += `${data[i].ingredients[y].ingredient}: ${ingredientQuantity} ${ingredientUnit}<br>`;
        }
        htmlRecettes += `<article tabindex="0"><aside><h2 title="${data[i].name}">${data[i].name}</h2>
        <p class="time"><i class="far fa-clock"></i> ${data[i].time} min</p>
        <p class="ingrédients" title="${htmlRecetteIngredients}">${htmlRecetteIngredients}</p>
        <p class="description" title="${data[i].description}">${data[i].description}</p></aside></article>`;
    }
    displayListRecettes(htmlRecettes);
};

/**
 * displayListRecettes - affiche la liste des recettes dans le html
 * @param  {String} htmlRecettes liste des recettes en html 
 */
const displayListRecettes = (htmlRecettes) => {
    let icone = document.querySelector('header > a > img:nth-of-type(1)');
    if (htmlRecettes.length !== 0) section2.innerHTML = htmlRecettes;
    else section2.innerHTML = '<div id="searchFailed"><span>Aucune recette ne correspond à votre critère…<br>Vous pouvez chercher « tarte aux pommes », « poisson », etc.</span></div>';
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
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListIngredients = (recettes = false) => {
    if(!recettes) recettes = factory.getRecettes();
    factory.setIngredient([]);
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
    addTagIngredient();
};

/**
 * initListAppareils - envoie chaque appareil unique dans chaque recette à la factory
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListAppareils = (recettes = false) => {
    if (!recettes) recettes = factory.getRecettes();
    factory.setAppareil([]);
    for (let i = 0; i < recettes.length; i++) {
        factory.initAppareil(recettes[i].appliance);
    }
    let listAppareils = factory.getAppareils();
    listAppareils = Array.from(new Set(listAppareils));
    factory.setAppareil(listAppareils);
    displayListFiltre(listAppareils, idListAppareil);
    addTagAppareil();
};

/**
 * initListUstensils - envoie chaque ustensil unique dans chaque recette à la factory
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListUstensils = (recettes = false) => {
    if (!recettes) recettes = factory.getRecettes();
    factory.setUstensil([]);
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
    addTagUstensil();
};

/**
 * displayListFiltre - affiche la liste reçue dans son élément id reçu
 * @param  {Array} arrayList liste d'ingrédients ou d'appareils ou d'ustensiles uniques
 * @param  {Array} idElement élément id dom html
 */
const displayListFiltre = (arrayList, idElement) => {
    let htmlListFiltre = '';
    arrayList.forEach(element => {
        htmlListFiltre += `<span class="tag" tabindex="0">${element}</span>`;
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

/**
 * handleSearchRecettes - capture la valeur passée dans la barre de recherche et l'envoie à la factory
 */
const handleSearchRecettes = () => {
    searchRecettes.addEventListener('keyup', () => {
        if (searchRecettes.value.length >= 3) {
            const recettes = factory.searchRecettes(searchRecettes.value.toLowerCase());
            initHtmlRecettes(recettes);
            initListIngredients(recettes);
            initListAppareils(recettes);
            initListUstensils(recettes);
        } else {
            const recettes = factory.getRecettes();
            initHtmlRecettes(recettes);
            initListIngredients();
            initListAppareils();
            initListUstensils();
        }
    });
};

/**
 * handleSearchIngredient - capture la valeur passée dans la barre de recherche ingrédients et l'envoie à la factory
 */
const handleSearchIngredient = () => {
    const searchIngredient = document.querySelector('.spanIngredients');
    searchIngredient.addEventListener('keyup', () => {
        if (searchIngredient.querySelector('#searchIngredient').value.length >= 3) {
            const ingredient = factory.searchIngredient(searchIngredient.querySelector('#searchIngredient').value.toLowerCase());
            displayListFiltre(ingredient, idListIngredient);
            addTagIngredient();
        } else {
            initListIngredients();
        }
    });
};

/**
 * addTagIngredient - capture la valeur du tag dans la liste ingrédients et l'envoie à la factory
 */
const addTagIngredient = () => {
    const arrayIngredients = factory.getIngredients();
    const divIngredients = document.querySelector('#divIngredients');
    const listTagIngredient = document.querySelector('#listTagIngredient');
    for (let i = 0; i < arrayIngredients.length; i++) {
        let tagIngredient = divIngredients.querySelectorAll('#listIngredients > span.tag')[i];
        arrayEvent.forEach(event => {
            tagIngredient.addEventListener(event, () => {
                const arrayListTagIngredient = factory.getTagIngredients();
                if (arrayListTagIngredient.length === 0 || arrayListTagIngredient.indexOf(tagIngredient.textContent.toLowerCase()) === -1) {
                    if (listTagIngredient.textContent.length === 17) listTagIngredient.innerHTML = `<p class="tag tagIngredient">${tagIngredient.textContent}<i class="far fa-times-circle"></i></p>`;
                    else listTagIngredient.innerHTML += `<p class="tag tagIngredient">${tagIngredient.textContent}<i class="far fa-times-circle"></i></p>`;
                    factory.initTagIngredient(tagIngredient.textContent.toLowerCase());
                    const recetteTagIngredient = factory.filtreRecetteIngredient(factory.getRecettes(), tagIngredient.textContent.toLowerCase());
                    factory.setRecettes(recetteTagIngredient);
                    const recettes = factory.getRecettes();
                    initListIngredients(recettes);
                    initListAppareils(recettes);
                    initListUstensils(recettes);
                    initHtmlRecettes(recettes);
                    spliceTagIngredient();
                }
            });
        });
    }
};

/**
 * spliceTagIngredient - capture la valeur du tag ingrédient supprimé et l'envoie à la factory
 */
const spliceTagIngredient = () => {
    let arrayListTagIngredient = factory.getTagIngredients();
    const listTagIngredient = document.querySelector('#listTagIngredient');
    for (let i = 0; i < arrayListTagIngredient.length; i++) {
        let tagIngredient = listTagIngredient.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagIngredient.querySelector('i').addEventListener(event, () => {
                const positionTag = arrayListTagIngredient.indexOf(tagIngredient.textContent.toLowerCase());
                arrayListTagIngredient.splice(positionTag, 1);
                factory.setTagIngredient(arrayListTagIngredient);
                filtreTagRecette();
                initHtmlRecettes();
                tagIngredient.remove();
            });
        });
    }
};

/**
 * handleSearchAppareil - capture la valeur passée dans la barre de recherche appareils et l'envoie à la factory
 */
const handleSearchAppareil = () => {
    const searchAppareil = document.querySelector('.spanAppareils');
    searchAppareil.addEventListener('keyup', () => {
        if (searchAppareil.querySelector('#searchAppareil').value.length >= 3) {
            const appareil = factory.searchAppareil(searchAppareil.querySelector('#searchAppareil').value.toLowerCase());
            displayListFiltre(appareil, idListAppareil);
            addTagAppareil();
        } else {
            initListAppareils();
        }
    });
};

/**
 * addTagAppareil - capture la valeur du tag dans la liste appareils et l'envoie à la factory
 */
const addTagAppareil = () => {
    const arrayAppareils = factory.getAppareils();
    const divAppareils = document.querySelector('#divAppareils');
    const listTagAppareil = document.querySelector('#listTagAppareil');
    for (let i = 0; i < arrayAppareils.length; i++) {
        let tagAppareil = divAppareils.querySelectorAll('#listAppareils > span.tag')[i];
        arrayEvent.forEach(event => {
            tagAppareil.addEventListener(event, () => {
                const arrayListTagAppareil = factory.getTagAppareils();
                if (arrayListTagAppareil.length === 0 || arrayListTagAppareil.indexOf(tagAppareil.textContent.toLowerCase()) === -1) {
                    if (listTagAppareil.textContent.length === 15) listTagAppareil.innerHTML = `<p class="tag tagAppareil">${tagAppareil.textContent}<i class="far fa-times-circle"></i></p>`;
                    else listTagAppareil.innerHTML += `<p class="tag tagAppareil">${tagAppareil.textContent}<i class="far fa-times-circle"></i></p>`;
                    factory.initTagAppareil(tagAppareil.textContent.toLowerCase());
                    const recetteTagAppareil = factory.filtreRecetteAppareil(factory.getRecettes(), tagAppareil.textContent.toLowerCase());
                    factory.setRecettes(recetteTagAppareil);
                    const recettes = factory.getRecettes();
                    initListIngredients(recettes);
                    initListAppareils(recettes);
                    initListUstensils(recettes);
                    initHtmlRecettes(recettes);
                    spliceTagAppareil();
                }
            });
        });
    }
};

/**
 * spliceTagAppareil - capture la valeur du tag appareil supprimé et l'envoie à la factory
 */
const spliceTagAppareil = () => {
    let arrayListTagAppareil = factory.getTagAppareils();
    const listTagAppareil = document.querySelector('#listTagAppareil');
    for (let i = 0; i < arrayListTagAppareil.length; i++) {
        let tagAppareil = listTagAppareil.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagAppareil.querySelector('i').addEventListener(event, () => {
                const positionTag = arrayListTagAppareil.indexOf(tagAppareil.textContent.toLowerCase());
                arrayListTagAppareil.splice(positionTag, 1);
                factory.setTagAppareil(arrayListTagAppareil);
                filtreTagRecette();
                initHtmlRecettes();
                tagAppareil.remove();
            });
        });
    }
};

/**
 * handleSearchUstensil - capture la valeur passée dans la barre de recherche ustensiles et l'envoie à la factory
 */
const handleSearchUstensil = () => {
    const searchUstensil = document.querySelector('.spanUstensiles');
    searchUstensil.addEventListener('keyup', () => {
        if (searchUstensil.querySelector('#searchUstensile').value.length >= 3) {
            const ustensil = factory.searchUstensil(searchUstensil.querySelector('#searchUstensile').value.toLowerCase());
            displayListFiltre(ustensil, idListUstensil);
            addTagUstensil();
        } else {
            initListUstensils();
        }
    });
};

/**
 * addTagUstensil - capture la valeur du tag dans la liste ustensils et l'envoie à la factory
 */
const addTagUstensil = () => {
    const arrayUstensils = factory.getUstensils();
    const divUstensils = document.querySelector('#divUstensiles');
    const listTagUstensil = document.querySelector('#listTagUstensile');
    for (let i = 0; i < arrayUstensils.length; i++) {
        let tagUstensil = divUstensils.querySelectorAll('#listUstensiles > span.tag')[i];
        arrayEvent.forEach(event => {
            tagUstensil.addEventListener(event, () => {
                const arrayListTagUstensil = factory.getTagUstensils();
                if (arrayListTagUstensil.length === 0 || arrayListTagUstensil.indexOf(tagUstensil.textContent.toLowerCase()) === -1) {
                    if (listTagUstensil.textContent.length === 16) listTagUstensil.innerHTML = `<p class="tag tagUstensile">${tagUstensil.textContent}<i class="far fa-times-circle"></i></p>`;
                    else listTagUstensil.innerHTML += `<p class="tag tagUstensile">${tagUstensil.textContent}<i class="far fa-times-circle"></i></p>`;
                    factory.initTagUstensil(tagUstensil.textContent.toLowerCase());
                    const recetteTagUstensil = factory.filtreRecetteUstensil(factory.getRecettes(), tagUstensil.textContent.toLowerCase());
                    factory.setRecettes(recetteTagUstensil);
                    const recettes = factory.getRecettes();
                    initListIngredients(recettes);
                    initListAppareils(recettes);
                    initListUstensils(recettes);
                    initHtmlRecettes(recettes);
                    spliceTagUstensil();
                }
            });
        });
    }
};

/**
 * spliceTagUstensil - capture la valeur du tag ustensil supprimé et l'envoie à la factory
 */
const spliceTagUstensil = () => {
    let arrayListTagUstensil = factory.getTagUstensils();
    const listTagUstensil = document.querySelector('#listTagUstensile');
    for (let i = 0; i < arrayListTagUstensil.length; i++) {
        let tagUstensil = listTagUstensil.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagUstensil.querySelector('i').addEventListener(event, () => {
                const positionTag = arrayListTagUstensil.indexOf(tagUstensil.textContent.toLowerCase());
                arrayListTagUstensil.splice(positionTag, 1);
                factory.setTagAppareil(arrayListTagUstensil);
                filtreTagRecette();
                initHtmlRecettes();
                tagUstensil.remove();
            });
        });
    }
};

/**
 * filtreTagRecette - refiltre chaque recherche avancée
 */
const filtreTagRecette = () => {
    let arrayListTagIngredient = factory.getTagIngredients();
    let arrayListTagAppareil = factory.getTagAppareils();
    let arrayListTagUstensil = factory.getTagUstensils();
    let origineRecette = factory.getOrigineRecettes();
    arrayListTagIngredient.forEach(tag => {
        const recetteTagIngredient = factory.filtreRecetteIngredient(origineRecette ,tag);
        origineRecette = recetteTagIngredient;
        factory.setRecettes(origineRecette);
    });
    arrayListTagAppareil.forEach(tag => {
        const recetteTagAppareil = factory.filtreRecetteAppareil(origineRecette ,tag);
        origineRecette = recetteTagAppareil;
        factory.setRecettes(origineRecette);
    });
    arrayListTagUstensil.forEach(tag => {
        const recetteTagUstensil = factory.filtreRecetteUstensil(origineRecette ,tag);
        origineRecette = recetteTagUstensil;
        factory.setRecettes(origineRecette);
    });
    initListIngredients(origineRecette);
    initListAppareils(origineRecette);
    initListUstensils(origineRecette);
    if (arrayListTagIngredient.length === 0 && arrayListTagAppareil.length === 0 && arrayListTagUstensil.length === 0) factory.setRecettes(origineRecette);
};