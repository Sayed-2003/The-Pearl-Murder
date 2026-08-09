console.log("The Pearl Murder");

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const landingPageEl = document.querySelector('#landing-page')
const briefingPageEl = document.querySelector('#briefing-page')
const startBtnEl = document.querySelector('#start-btn')
const backBtnEl = document.querySelector('#back-btn')


console.log(landingPageEl)
console.log(briefingPageEl)
console.log(backBtnEl)
console.log(startBtnEl)
/*-------------------------------- Functions --------------------------------*/
function showBriefingPage(){
    landingPageEl.style.display = 'none'
    briefingPageEl.style.display = 'flex'
}

function showLandingPage(){
    briefingPageEl.style.display = 'none'
    landingPageEl.style.display = 'flex'
}

/*----------------------------- Event Listeners -----------------------------*/
startBtnEl.addEventListener('click',showBriefingPage)

backBtnEl.addEventListener('click',showLandingPage)


