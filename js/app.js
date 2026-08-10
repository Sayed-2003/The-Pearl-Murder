console.log("The Pearl Murder");

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const landingPageEl = document.querySelector('#landing-page')
const briefingPageEl = document.querySelector('#briefing-page')
const startBtnEl = document.querySelector('#start-btn')
const backBtnEl = document.querySelector('#back-btn')
const beginInvestigationBtn = document.querySelector('#begin-investigation-btn')
const firstScene = document.querySelector('#scene1-page')


console.log(landingPageEl)
console.log(briefingPageEl)
console.log(backBtnEl)
console.log(startBtnEl)
console.log(beginInvestigationBtn)
console.log(firstScene)
/*-------------------------------- Functions --------------------------------*/
function showBriefingPage(){
    landingPageEl.style.display = 'none'
    briefingPageEl.style.display = 'flex'
}

function showLandingPage(){
    briefingPageEl.style.display = 'none'
    landingPageEl.style.display = ''
}

function showScene1(){
    briefingPageEl.style.display = 'none'
    firstScene.style.display = 'flex'
}

/*----------------------------- Event Listeners -----------------------------*/
startBtnEl.addEventListener('click',showBriefingPage)

backBtnEl.addEventListener('click',showLandingPage)

beginInvestigationBtn.addEventListener('click',showScene1)

