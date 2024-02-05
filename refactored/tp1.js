
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
SwitchColorButton.addEventListener('click',switchBlackAndWhite)

let AddTitleButton = document.querySelector('#AddTitle');
AddTitleButton.addEventListener('click', function(){
    let promptedTitle = prompt('Veuillez ajouter un titre');
    creationTitle(promptedTitle);
})

let AddParagraphButton = document.querySelector('#AddParagraph');
AddParagraphButton.addEventListener('click', AddPromptedParagraph)

let ToggleVisibilityButton = document.querySelector('.ToggleVisibility');
ToggleVisibilityButton.addEventListener('click', switchVisibilityAllParagraphs)


