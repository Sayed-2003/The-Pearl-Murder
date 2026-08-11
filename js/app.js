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


const officeBtn = document.querySelector('#office-btn')
const deskBtn = document.querySelector('#desk-btn')
const ObserveText = document.querySelector('#scene1-observation')
const continueToScene2Btn =document.querySelector('#continue-to-hall')


const seconedScene = document.querySelector('#scene2-page')
const ObserveText2= document.querySelector('#scene2-observation')
const askHasanEl = document.querySelector('#askHasan')
const askMohamedEl = document.querySelector('#askMohammed')


// testing the cache 
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

function examineOffice(){
    ObserveText.textContent = "The office shows signs of a struggle. Papers are scattered across the floor."
}

function examineDesk(){
    ObserveText.textContent =  "You discover an unfinished letter mentioning a serious family dispute."
}

function showScene2(){
    firstScene.style.display = 'none'
    seconedScene.style.display = 'flex'
}

function askHasan(){
    ObserveText2.textContent = "Hassan was respected by many people, but recently he seemed worried."
}

function askMohammed(){
    ObserveText2.textContent = "I heard Hassan and Mohammed arguing the night before the murder."
}
/*----------------------------- Event Listeners -----------------------------*/
startBtnEl.addEventListener('click',showBriefingPage)

backBtnEl.addEventListener('click',showLandingPage)

beginInvestigationBtn.addEventListener('click',showScene1)

officeBtn.addEventListener('click',examineOffice)

deskBtn.addEventListener('click', examineDesk)

continueToScene2Btn.addEventListener('click', showScene2)

askHasanEl.addEventListener('click',askHasan)

askMohamedEl.addEventListener('click',askMohammed)