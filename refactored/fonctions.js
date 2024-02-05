function AddPromptedParagraph(){
    let promptedParagraph = prompt('Veuillez ajouter un paragraphe');
    let newParagraph = document.createElement('p')
    newParagraph.textContent=promptedParagraph;

    let newToggleVisibility = document.createElement('button');
    newToggleVisibility.textContent = 'Masquer';
    newToggleVisibility.value="block";
    newToggleVisibility.className = 'ToggleVisibility';
    newToggleVisibility.addEventListener('click', 
    function(event){
        console.log('affichermasquer un element');
        const nouvelleVisibilite = (newParagraph.value=='none')?'block':'none';
        ToggleElement(newParagraph,nouvelleVisibilite);
        console.log('newParagraph'+newParagraph.value);
        newToggleVisibility.textContent =(nouvelleVisibilite=='none')?'Afficher':'Cacher';
        newToggleVisibility.value=nouvelleVisibilite;

    });
    document.body.appendChild(newParagraph);
    document.body.appendChild(newToggleVisibility);
}

function creationTitle(promptedTitle) {
    let existingTitle = document.querySelector('h1');
    let newTitle = document.createElement('h1');
    newTitle.textContent = promptedTitle;
    if (existingTitle) {
        existingTitle.parentNode.replaceChild(newTitle, existingTitle);
    }
    else {
        document.body.appendChild(newTitle);
    }
}

function switchVisibilityAllParagraphs() {
    let selectedParagraphs = document.querySelectorAll('p');
    console.log(ToggleVisibilityButton.value);
    const nouvelleVisibility = (ToggleVisibilityButton.value=='none')?'block':'none';;
    selectedParagraphs.forEach((p)=>{
        console.log(p);
        ToggleElement(p,nouvelleVisibility);
      
    });
    
    ToggleVisibilityButton.value=nouvelleVisibility;
    ToggleVisibilityButton.textContent= (nouvelleVisibility=='none')?'Afficher':'Masquer';
}

function ToggleElement(pElement, targetVisibilty) {
    console.log('visibilite cible'+targetVisibilty);
    pElement.value = targetVisibilty;
    pElement.style.display = targetVisibilty
}

function defaultDisplayValue(pElement)
{
    return (pElement.style.display == '') || (pElement.style.display == 'block');
}

function switchBlackAndWhite() {
    let body = document.querySelector('body');
    let currentColor = window.getComputedStyle(body).backgroundColor;
    if ((currentColor === '') || (currentColor === 'rgb(255, 255, 255)')) {
        body.style.backgroundColor = 'rgb(0,0,0)';
        body.style.color = 'rgb(255,255,255)';
    } else {
        body.style.backgroundColor = 'rgb(255,255,255)';
        body.style.color = 'rgb(0,0,0)';
    }
}

