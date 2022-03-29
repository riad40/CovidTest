let radioValue=null;
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
        title: 'wach nta mrid ?',
        type: 'radio',
        options: ['yaap', 'noop'],
        answer: ''
    },
    {
        title: 'l3mer ?',
        type: 'number',
        numberType: 'age',
        spanName: 'ans',
        min: 15,
        max: 90,
        answer: ''
    },
    {
        title: 'lharara ?',
        type: 'number',
        numberType: 'lharara',
        spanName: 'degré',
        min: 37,
        max: 40,
        answer: ''
    },
    {
        title: 'lkilwat ?',
        type: 'number',
        numberType: 'lkilwat',
        spanName: 'kg',
        min: 30,
        max: 120,
        answer: ''
    }

]

// display questions

const questionTitle = document.querySelector('#title')
// console.log(questionTitle)
let compteur = 0
questionTitle.innerText = questions[compteur].title
const switchBtns = document.querySelector('#switchBtns') 
// console.log(switchBtns)
switchBtns.classList.remove('btns')
switchBtns.classList.add('btnsQ1')
generateForm(compteur)

/* ========= next button ========= */

const next = document.querySelector('#next')

next.addEventListener('click', nextQuestion)

function nextQuestion() {
    if (getAnswer(compteur)) {
        compteur++
        if (compteur > 0) {
            previous.classList.remove('inactive')
            switchBtns.classList.add('btns')
            switchBtns.classList.remove('btnsQ1')
        } if (compteur == 3) {
            next.textContent = 'finish'
        }
        questionTitle.innerText = questions[compteur].title
        generateForm(compteur)
    }
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
    generateForm(compteur)
}

/* ========= generate form ========= */

function generateForm(compteur) {
    const form = document.querySelector("#form")
    form.innerHTML = ''
    let question = questions[compteur]
    switch (question.type) {
        case 'radio':
            radioValue=null;
            for (let i = 0; i < question.options.length; i++) {

                let radio  = document.createElement("input")
                radio.type = "radio"
                radio.id = "radio-"+i
                radio.name = "radio"
                radio.className = "form-check-input margin-left"
                radio.value = question.options[i]
                const label = document.createElement('label')
                label.setAttribute("for","radio-"+i)
                label.textContent = question.options[i]
                label.className = "form-check-label margin-left-label"
                form.className = "radioStyle"
               
                form.appendChild(radio)
                form.appendChild(label)
                radio.addEventListener('change',(e)=>{
                        radioValue=e.target.value;

                })
            }

            break;

        case 'number':

            let inputGroup = document.createElement("div")
            inputGroup.className = "input-group w-75"
            let input = document.createElement("input")
            input.type = "number"
            input.id = question.numberType
            input.name = question.numberType
            input.className = "form-control"
            const span = document.createElement('span')
            span.textContent = question.spanName
            span.className = "input-group-text"
            inputGroup.append(input, span)
            form.appendChild(inputGroup)

            break;
    
        default:
            break;
    }
}

/* ========= get answers ========= */

function getAnswer(compteur) {
   
    const form = document.querySelector("#form")
    let question = questions[compteur]
    switch (question.type) {
        case 'radio':
            if(radioValue!=null){
                question.answer = radioValue;
                console.log("given answer is "+question.answer );
                return true;
            } else {
                return false;
            }
            break;
        case 'number':
            let input = document.querySelector("#"+question.numberType)
            if (input.value != '' && input.value >= question.min && input.value <= question.max) {
                question.answer = input.value;
                console.log("given answer is "+question.answer );
                return true;
            } else {
                return false;
            }
            break;    
        default:
            break;
    }

    
}