/* ====== start button ====== */

const btnStart = document.querySelector('#btnStart')

btnStart.addEventListener('click', quizStart)

function quizStart() {
    // advice progresse
    const adviceProgresse = document.querySelector('#advProgress')
    const adviceProgresse1 = document.querySelector('#advProgress1')

    adviceProgresse.classList.remove('progressHover2', 'progressFlex')
    adviceProgresse1.classList.remove('progressHover1')

    // questions progresse
    const questionsProgresse = document.querySelector('#questionProgress')
    const questionsProgresse1 = document.querySelector('#questionProgress1')

    questionsProgresse.classList.add('progressHover2', 'progressFlex')
    questionsProgresse1.classList.add('progressHover1')

    // scroll to questions
    const conseilPage = document.querySelector('#conseilPage')
    const questionsPage = document.querySelector('#questionsPage')

    conseilPage.classList.remove('active')
    conseilPage.classList.add('inactive')
    questionsPage.classList.remove('inactive')
    questionsPage.classList.add('active','animate__animated', 'animate__bounceInRight')

}

// Questions

const questions = [ 
    {
        title: 'Quelle est la capitale de la France ?',
        type: 'radio',
        options: ['yaap', 'noop']
    },
    {
        title: 'Quelle est la capitale de la Belgique ?',
        type: 'number',
        answer: ''
    },
    {
        title: 'la fin ?',
        type: 'number',
        answer: ''
    }
]

// display questions

const questionTitle = document.querySelector('#title')
// console.log(questionTitle)
let compteur = 0
questionTitle.innerText = questions[compteur].title
generateForm(compteur)
const switchBtns = document.querySelector('#switchingBtns') 
switchBtns.classList.remove('btns')
switchBtns.classList.add('btnsQ1')

/* ========= next button ========= */

const next = document.querySelector('#next')

next.addEventListener('click', nextQuestion)

function nextQuestion() {
    compteur++
    if (compteur > 0) {
        previous.classList.remove('inactive')
        switchBtns.classList.add('btns')
        switchBtns.classList.remove('btnsQ1')
    } 
    questionTitle.innerText = questions[compteur].title
}

/* ========= previous button ========= */

const previous = document.querySelector('#previous')

previous.addEventListener('click', previousQuestion)

function previousQuestion() {
    compteur--
    if (compteur == 0) {
        previous.classList.add('inactive')
        switchBtns.classList.remove('btns')
        switchBtns.classList.add('btnsQ1')
    }
    questionTitle.innerText = questions[compteur].title
}

/* ========= generate form ========= */

// function generateForm(compteur) {
//     const form = document.querySelector("#form")
//     let question = questions[compteur]
//     switch (question.type) {
//         case 'radio':

//             break;
    
//         default:
//             break;
//     }
// }
