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
const askYosufEl = document.querySelector('#askYosuf')

const continueToScene3Btn = document.querySelector('#continue-mohamed-room')
const thirdscene =document.querySelector('#scene3-page')



// testing the cache 
console.log(landingPageEl)
console.log(briefingPageEl)
console.log(backBtnEl)
console.log(startBtnEl)

console.log(beginInvestigationBtn)
console.log(firstScene)

console.log(continueToScene3Btn)
console.log(thirdscene)
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
    console.log('in scene 1')
    briefingPageEl.style.display = 'none'
    firstScene.style.display = 'flex'
}

function examineOffice(){
    ObserveText.textContent = " The office shows signs of a struggle. Several papers have been knocked onto the floor, and a decorative letter opener lies nearby"

}

function examineDesk(){
    ObserveText.textContent =" You discover an unfinished letter. Hassan wrote about serious disagreements involving his family and business"
}

function showScene2(){
    console.log('in scene 2')
    firstScene.style.display = 'none'
    seconedScene.style.display = 'flex'
}

function askHasan(){
    ObserveText2.textContent = "Hassan had been worried lately. He was having problems with both his family and his business."
}

function askMohammed(){
    ObserveText2.textContent = "I heard Hassan arguing with Mohammed the night before he died. It sounded serious."
}

function askYosuf(){
    ObserveText2.textContent  = "Hassan and Yousef had been arguing about money for weeks. Hassan didn't trust him like he used to."
}

function showScene3(){
    console.log('in scene 3')

    seconedScene.style.display = 'none'
    thirdscene.style.display = 'flex'
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

askYosufEl.addEventListener('click' , askYosuf)

continueToScene3Btn.addEventListener('click', showScene3)