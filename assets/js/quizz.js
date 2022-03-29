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

    // progress bar


}

// Questions

const questions = [ 
    {
        title: 'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Quelle est votre température corporelle ?',
        type: 'number',
        numberType: 'temp',
        spanName: 'degré',
        min: 34,
        max: 42,
        answer: ''
    },
    {
        title: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },    
    {
        title: 'Ces derniers jours, avez-vous un mal de gorge ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Actuellement, comment vous vous sentez ?',
        type: 'radio',
        options: ['Bien', 'Assez bien', 'Fatigue', 'Trés Fatigué(e)'],
        answer: ''
    },
    {
        title: 'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',
        type: 'number',
        numberType: 'age',
        spanName: 'ans',
        min: 15,
        max: 110,
        answer: ''
    },
    {
        title: 'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',
        type: 'number',
        numberType: 'poid',
        spanName: 'kg',
        min: 20,
        max: 250,
        answer: ''
    },
    {
        title: 'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',
        type: 'number',
        numberType: 'taille',
        spanName: 'cm',
        min: 80,
        max: 250,
        answer: ''
    },
    {
        title: 'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Êtes-vous diabétique ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Avez-vous ou avez-vous eu un cancer ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Avez-vous une insuffisance rénale chronique dialysée ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Avez-vous une maladie chronique du foie ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Êtes-vous enceinte ?',
        type: 'radio',
        options: ['Oui', 'Non', 'HOMME'],
        answer: ''
    },
    {
        title: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    },
    {
        title: 'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',
        type: 'radio',
        options: ['Oui', 'Non'],
        answer: ''
    }

]

console.log(questions.length)

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
        const progVal = document.getElementById('prog')
        const counter = document.getElementById('counter')
        progVal.value++
        counter.innerText++
        console.log(compteur)
        if (compteur > 0) {
            previous.classList.remove('inactive')
            switchBtns.classList.add('btns')
            switchBtns.classList.remove('btnsQ1')
        } if (compteur == 22) {
            next.textContent = 'finish'
        }
        questionTitle.innerText = questions[compteur].title
        generateForm(compteur)
    }
}

// progress bar


/* ========= previous button ========= */

const previous = document.querySelector('#previous')

previous.addEventListener('click', previousQuestion)

function previousQuestion() {
    compteur--
    const progVal = document.getElementById('prog')
    const counter = document.getElementById('counter')
    progVal.value--
    counter.innerText--
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
            input.setAttribute("placeholder", question.min + ' - ' + question.max)
            input.setAttribute("min", question.min)
            input.setAttribute("max", question.max)
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