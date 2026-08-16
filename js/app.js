console.log("The Pearl Murder");

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let message = null
let image = null

/*------------------------ Cached Element References ------------------------*/
const landingPageEl = document.querySelector('#landing-page')
const briefingPageEl = document.querySelector('#briefing-page')
const startBtnEl = document.querySelector('#start-btn')
const backBtnEl = document.querySelector('#back-btn')

// scene 1
const beginInvestigationBtn = document.querySelector('#begin-investigation-btn')
const firstScene = document.querySelector('#scene1-page')
const officeBtn = document.querySelector('#office-btn')
const deskBtn = document.querySelector('#desk-btn')
const ObserveText = document.querySelector('#scene1-observation')

// scene 2
const continueToScene2Btn = document.querySelector('#continue-to-hall')
const seconedScene = document.querySelector('#scene2-page')
const ObserveText2 = document.querySelector('#scene2-observation')
const askHasanEl = document.querySelector('#askHasan')
const askMohamedEl = document.querySelector('#askMohammed')
const askYosufEl = document.querySelector('#askYosuf')

// scene 3
const continueToScene3Btn = document.querySelector('#continue-mohamed-room')
const thirdscene = document.querySelector('#scene3-page')
const ObserveText3 = document.querySelector('#scene3-observation')
const financialRecordsEl = document.querySelector('#financial-Records')
const hassanNotesEl = document.querySelector('#hassan-notes')

// scene 4
const continueToScene4Btn = document.querySelector('#mohamedRoom')
const fourthscene = document.querySelector('#scene4-page')
const ObserveText4 = document.querySelector('#scene4-observation')
const searchRoomEl = document.querySelector('#srchRoom')
const inspectDeskEl = document.querySelector('#InspDesk')

// scene 5
const continueToScene5Btn = document.querySelector('#final-review')
const lastScene = document.querySelector('#scene5-page')
const accuseMohammedEl = document.querySelector('#accuseMohammed')
const accuseYousefEl = document.querySelector('#accuseYousef')
const moreEvidenceEl = document.querySelector('#moreEvidence')

// accusation Result
const accusationEl = document.querySelector('#theAccusation')
const accusationScene = document.querySelector('#accusation')
const trueAccusationImageEl = document.querySelector('#trueAccusationImage')
const backToHomeEl = document.querySelector('#backToHome')
const falseAccusationEl = document.querySelector('#falseAccusationImage')


// how to play button
const howToBtnEl = document.querySelector('#howTo-btn')
const howToPlayEl = document.querySelector('#howto-play')
const closeHowToPlayEl = document.querySelector('#close-howto-btn')

// testing the cache 
console.log(landingPageEl)
console.log(briefingPageEl)
console.log(backBtnEl)
console.log(startBtnEl)

console.log(beginInvestigationBtn)
console.log(firstScene)

console.log(continueToScene3Btn)
console.log(thirdscene)

console.log(howToBtnEl)
console.log(howToPlayEl)
console.log(closeHowToPlayEl)
/*-------------------------------- Functions --------------------------------*/
function showBriefingPage() {
    console.log('In Briefing page')

    landingPageEl.style.display = 'none'
    briefingPageEl.style.display = 'flex'
}

function showLandingPage() {
    console.log('In Landing page')

    briefingPageEl.style.display = 'none'
    landingPageEl.style.display = ''
}

// scene 1
function showScene1() {
    console.log('in scene 1')

    briefingPageEl.style.display = 'none'
    firstScene.style.display = 'flex'
}

function examineOffice() {
    ObserveText.textContent = " The office shows signs of a struggle. Several papers have been knocked onto the floor, and a decorative letter opener lies nearby"

}

function examineDesk() {
    ObserveText.textContent = " You discover an unfinished letter. Hassan wrote about serious disagreements involving his family and business"
}

// scene 2
function showScene2() {
    console.log('in scene 2')

    firstScene.style.display = 'none'
    seconedScene.style.display = 'flex'
}

function askHasan() {
    ObserveText2.textContent = "Hassan had been worried lately. He was having problems with both his family and his business."
}

function askMohammed() {
    ObserveText2.textContent = "I heard Hassan arguing with Mohammed the night before he died. It sounded serious."
}

function askYosuf() {
    ObserveText2.textContent = "Hassan and Yousef had been arguing about money for weeks. Hassan didn't trust him like he used to."
}

// scene 3
function showScene3() {
    console.log('in scene 3')

    seconedScene.style.display = 'none'
    thirdscene.style.display = 'flex'
}

function financialRecords() {
    ObserveText3.textContent = "You discover that Hassan and Yousef recently lost a large amount of money in a failed business deal."
}

function hassanNotes() {
    ObserveText3.textContent = "Hassan wrote that he planned to end his partnership with Yousef. The note makes Yousef appear to have a strong motive."
}

// scene 4

function showScene4() {
    console.log('in scene 4')

    thirdscene.style.display = 'none'
    fourthscene.style.display = 'flex'
}

function searchRoom() {
    ObserveText4.textContent = "You discover a letter showing that Hassan planned to greatly reduce Mohammed's inheritance."
}

function inspectDesk() {
    ObserveText4.textContent = "You find a note written by Mohammed after an argument with his father. His anger toward Hassan is clear."
}

// scene 5
function showLastScene() {
    console.log('final scene')

    fourthscene.style.display = 'none'
    lastScene.style.display = 'flex'
}

// final accustion result
function finalAccusation(event) {
    console.log('final accusation')

    if (event.target === accuseMohammedEl) {
        message = "Detective Abdulla confronts Mohammed with what he discovered. Mohammed's story begins to fall apart, and he eventually admits his responsibility for Hassan's death."
        trueAccusationImageEl.setAttribute('src', './Assets/images/absolute-cinema.png')
        accusationEl.textContent = message
        lastScene.style.display = 'none'
        accusationScene.style.display = 'flex'
    } else if (event.target === accuseYousefEl) {
        message = "Detective Abdulla accuses Yousef. Although Yousef had a motive, the conclusion was wrong. The investigation collapses while the real killer remains free."
        falseAccusationEl.setAttribute('src', './Assets/images/false-accusation.png')
        accusationEl.textContent = message
        lastScene.style.display = 'none'
        accusationScene.style.display = 'flex'
    } else {
        message = "Detective Abdulla delays making an accusation. With the investigation stalled, Mohammed takes the opportunity to disappear before the truth can be proven."
        falseAccusationEl.setAttribute('src', './Assets/images/false-accusation.png')
        accusationEl.textContent = message
        lastScene.style.display = 'none'
        accusationScene.style.display = 'flex'
    }
}

// back to home button
function backToHomeBtn() {
    message = null
    trueAccusationImageEl.setAttribute('src', '')
    falseAccusationEl.setAttribute('src', '')
    landingPageEl.style.display = ''
    accusationScene.style.display = 'none'

}

// how to play button
function showHowToPlay(){
    howToPlayEl.style.display = 'flex'
}

function closeHowToPlay(){
    howToPlayEl.style.display = 'none'
}
/*----------------------------- Event Listeners -----------------------------*/
startBtnEl.addEventListener('click', showBriefingPage)

backBtnEl.addEventListener('click', showLandingPage)

// scene1
beginInvestigationBtn.addEventListener('click', showScene1)

officeBtn.addEventListener('click', examineOffice)

deskBtn.addEventListener('click', examineDesk)

// scene 2
continueToScene2Btn.addEventListener('click', showScene2)

askHasanEl.addEventListener('click', askHasan)

askMohamedEl.addEventListener('click', askMohammed)

askYosufEl.addEventListener('click', askYosuf)

// scene 3
continueToScene3Btn.addEventListener('click', showScene3)
financialRecordsEl.addEventListener('click', financialRecords)
hassanNotesEl.addEventListener('click', hassanNotes)

// scene 4
continueToScene4Btn.addEventListener('click', showScene4)
searchRoomEl.addEventListener('click', searchRoom)
inspectDeskEl.addEventListener('click', inspectDesk)

// scene5 
continueToScene5Btn.addEventListener('click', showLastScene)
accuseMohammedEl.addEventListener('click', finalAccusation)
accuseYousefEl.addEventListener('click', finalAccusation)
moreEvidenceEl.addEventListener('click', finalAccusation)

// back to home button 
backToHomeEl.addEventListener('click', backToHomeBtn)

// how to play button
howToBtnEl.addEventListener('click', showHowToPlay)

closeHowToPlayEl.addEventListener('click', closeHowToPlay)