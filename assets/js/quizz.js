// store the radio value 

let radioValue = null

// main result display

const mainResult = document.querySelector('#mainResult')

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

// console.log(questions.length)

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
        // console.log(compteur)
        if (compteur > 0) {
            previous.classList.remove('inactive')
            switchBtns.classList.add('btns')
            switchBtns.classList.remove('btnsQ1')
        } if (compteur == 21) {
            next.textContent = 'finish'
            next.classList.add('finish')
            const finish = document.querySelector('.finish')
            finish.addEventListener('click', displayResult)
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
            radioValue = null
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
                    radioValue = e.target.value
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
const answers = []

function getAnswer(compteur) {
   
    const form = document.querySelector("#form")
    let question = questions[compteur]
    switch (question.type) {

        case 'radio':

            if(radioValue!=null){
                question.answer = radioValue
                answers.push(question.answer)
                return true
            } else {
                return false
            }

            break;

        case 'number':

            let input = document.querySelector("#"+question.numberType)
            if (input.value != '' && input.value >= question.min && input.value <= question.max) {
                question.answer = input.value;
                answers.push(question.answer)
                return true
            } else {
                return false
            }

            break; 

        default:
            break;
    }

}

/* ========= display results ========= */

function displayResult() {

    const result = document.querySelector("#displayResult")
    const questionsPage = document.querySelector('#questionsPage')

    questionsPage.classList.add('inactive')
    questionsPage.classList.remove('active')

    result.classList.add('activeResult','animate__animated', 'animate__bounceInRight')
    result.classList.remove('inactiveResult')

    // questions progresse
    const questionsProgresse = document.querySelector('#questionProgress')
    const questionsProgresse1 = document.querySelector('#questionProgress1')

    questionsProgresse.classList.remove('progressHover2', 'progressFlex')
    questionsProgresse1.classList.remove('progressHover1')

    // result progresse
    const resultProgress = document.querySelector('#resultProgress')
    const resultProgresse1 = document.querySelector('#resultProgress1')

    resultProgress.classList.add('progressHover2', 'progressFlex')
    resultProgresse1.classList.add('progressHover1')

    anlyseResults()

}

/* ========== algo ========== */

let majorFactor = 0 
let minorFactor = 0
let pronoFactor = 0
let gravityFactor = 0

function anlyseResults() {

    // facteur pronostique

    if (answers[11] >= 70) {
        pronoFactor++
    }
    if (answers[14] === 'Oui') {
        pronoFactor++
    }
    if (answers[15] === 'Oui') {
        pronoFactor++
    }
    if (answers[16] === 'Oui') {
        pronoFactor++
    }
    if (answers[17] === 'Oui') {
        pronoFactor++
    }
    if (answers[18] === 'Oui') {
        pronoFactor++
    }
    if (answers[19] === 'Oui') {
        pronoFactor++
    }
    if (answers[20] === 'Oui') {
        pronoFactor++
    }
    if (answers[21] === 'Oui') {
        pronoFactor++
    }
    if (answers[22] === 'Oui') {
        pronoFactor++
    }

    // facteur mineur

    if (answers[2] >= 39) {
        minorFactor++
    }
    if (answers[9] === 'Oui') {
        minorFactor++
    }
    if (answers[10] === 'Fatigue' || answers[10] === 'Trés Fatigué(e)') {
        minorFactor++
    }

    // facteur majeur

    if (answers[2] <= 35,4) {
        majorFactor++
    }
    if (answers[9] === 'Oui') {
        majorFactor++
    }
    if (answers[8] === 'Oui') {
        majorFactor++
    }

    console.log('major ' + majorFactor)
    console.log('minor ' + minorFactor)
    console.log('prono ' + pronoFactor)
    // remeber to deleted used to chek if data is available

    console.log(answers)

    // algo pour determiner la gravite :

      // Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée
      if(answers[1] === 'Oui' || (answers[3] === 'Oui' && answers[5] === 'Oui') || (answers[3] === 'Oui' && answers[4] === 'Oui') || (answers[1] === 'Oui' && answers[6] === 'Oui')){
        // Tout patient sans facteur pronostique
    
        if(pronoFactor == 0){
                if(minorFactor == 0 && majorFactor == 0 && ( answers[11] < 50)){
                    mainResult.innerText = "nous vous conseillons de rester à votre domicile et de contacter votre médecin en " + 
                    "cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer" +
                    "vos symptômes." 
                }
                else if(minorFactor == 0 && majorFactor >= 1 && ( answers[11] > 50 && answers[11] < 69)){
                    mainResult.innerText = "téléconsultation ou médecin généraliste ou visite à domicile " +
                    "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent."  
                }
        }
    
        //Tout patient avec un facteur pronostique ou plus
        if(pronoFactor >= 1){
            if((minorFactor == 0 && majorFactor == 0) || minorFactor == 1){
                mainResult.innerText = "téléconsultation ou médecin généraliste ou visite à domicile " + 
                "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent." 
            }
            else if(minorFactor >= 2){
                mainResult.innerText = "appel 141" 
            }
        }
        //Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
        if((pronoFactor>= 0) && majorFactor>=1 ){
            mainResult.innerText = "appel 141"
        }
     }
    
     // Tout patient avec fièvre et toux 
    
      if(answers[1]==='Oui' && answers[3]==='Oui')
      {
          //Tout patient sans facteur pronostique 
          if(pronoFactor == 0){
              if((minorFactor>= 0) && majorFactor == 0 ){
                mainResult.innerText = "téléconsultation ou médecin généraliste ou visite à domicile " + 
                "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent." 
              }
          }
          // Tout patient avec un facteur pronostique ou plus 
          if(pronoFactor >= 0){
              if((minorFactor == 0 || minorFactor == 1) && majorFactor == 0){
                mainResult.innerText = "téléconsultation ou médecin généraliste ou visite à domicile " + 
                "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent." 
              }
              if(minorFactor >= 2){
                mainResult.innerText = "appel 141" 
              }
          }
         // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
          if((pronoFactor>= 0) && majorFactor>=1 ){
            mainResult.innerText = "appel 141" 
        }
      }
          // Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures 
          if(answers[1] === 'Oui' || answers[3] === 'Oui' || answers[5] === 'Oui' || answers[4] === 'Oui'){
             if(majorFactor == 0 && minorFactor== 0){
                 mainResult.innerText = "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute" 
              }
             if((majorFactor == 1 || minorFactor == 1) || pronoFactor == 1){
                 mainResult.innerText = "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141." 
              }
          }
         // Tout patient avec aucun symptôme
        if ((answers[1] === 'Non') && (answers[3] === 'Non') && (answers[4] === 'Non') && (answers[5] === 'Non') && (answers[6] === 'Non')){
            mainResult.innerText = 'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.' +
            'Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.'+
            'Pour toute information concernant le Covid-19 allez vers la page d’accueil.'
        }
    
}