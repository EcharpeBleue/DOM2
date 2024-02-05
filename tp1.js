
let RandomColorButton = document.querySelector('#RandomColorButton');
RandomColorButton.addEventListener('click', function() {
let body = document.querySelector('body')    
let green = Math.floor(Math.random() * 255);
let red = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
body.style.backgroundColor.replaceAll = (' ','');
})

let SwitchColorButton = document.querySelector('#SwitchColorButton');
SwitchColorButton.addEventListener('click', function(){
let body = document.querySelector('body');
let currentColor = window.getComputedStyle(body).backgroundColor;
if ((currentColor == '') || (currentColor === 'rgb(255, 255, 255)')){
    body.style.backgroundColor = 'rgb(0,0,0)';
    body.style.color = 'rgb(255,255,255)'
} else {
    body.style.backgroundColor = 'rgb(255,255,255)';
    body.style.color = 'rgb(0,0,0)'
}
})

let AddTitleButton = document.querySelector('#AddTitle');
AddTitleButton.addEventListener('click', function(){
    let promptedTitle = prompt('Veuillez ajouter un titre');
    let existingTitle = document.querySelector('h1');
    let newTitle = document.createElement('h1');
    newTitle.textContent = promptedTitle;
    if (existingTitle){
        existingTitle.parentNode.replaceChild(newTitle, existingTitle);
    }
    else {
        document.body.appendChild(newTitle);
    }
})

let AddParagraphButton = document.querySelector('#AddParagraph');
AddParagraphButton.addEventListener('click', function(){
    let promptedParagraph = prompt('Veuillez ajouter un paragraphe');
    let newParagraph = document.createElement('p')
    newParagraph.textContent=promptedParagraph;
    
    let ToggleVisibilitySubButton = document.createElement('button');
    ToggleVisibilitySubButton.textContent = 'Masquer/Révéler';
    ToggleVisibilitySubButton.className = 'ToggleVisibility';
    console.log(ToggleVisibilitySubButton.className);
    
    ToggleVisibilitySubButton.addEventListener('click', function(){
        if ((newParagraph.style.display=='') || (newParagraph.style.display=='block')){
            newParagraph.style.display='none';
        } else {
            newParagraph.style.display='block';
        }
    });
    document.body.appendChild(newParagraph);
    document.body.appendChild(ToggleVisibilitySubButton);
})

let isHidden = false;
let ToggleVisibilityButton = document.querySelector('.ToggleVisibility');
ToggleVisibilityButton.addEventListener('click', function(){
    let selectedParagraphs = document.querySelectorAll('p');
    isHidden = !isHidden; // bascule la valeur de isHidden
    selectedParagraphs.forEach(function(p) {
        if (isHidden){
            p.style.display='none';
        } else {
            p.style.display='block';
        }
    });
})




