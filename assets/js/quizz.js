// previous and next buttons

const previous = document.querySelectorAll('#previous')
const next = document.querySelectorAll('#next')

// start button

const btnStart = document.getElementById('btnStart')
//console.log(btnStart)

// Questions 

document.querySelector('#Question1')
document.querySelector('#Question2')
document.querySelector('#Question3')
document.querySelector('#Question4')
document.querySelector('#Question5')
document.querySelector('#Question6')
document.querySelector('#Question7')
document.querySelector('#Question8')
document.querySelector('#Question9')
document.querySelector('#Question10')
document.querySelector('#Question11')
document.querySelector('#Question12')
document.querySelector('#Question13')
document.querySelector('#Question14')
document.querySelector('#Question15')

// 

let i = 1

/* ====== next button ====== */

next.forEach((btn) => {
    btn.addEventListener('click', nextF)
})

function nextF() {
    document.querySelector('#Question' + i).classList.remove('active')
    document.querySelector('#Question' + i).classList.add('inactive')
    i++
    document.querySelector('#Question' + i).classList.remove('inactive')
    document.querySelector('#Question' + i).classList.add('active', 'animate__animated', 'animate__backInRight')
}

/* ====== previous button ====== */

previous.forEach((btn) => {
    btn.addEventListener('click', previousF)
})

function previousF() {
    document.querySelector('#Question' + i).classList.remove('active')
    document.querySelector('#Question' + i).classList.add('inactive')
    --i
    document.querySelector('#Question' + i).classList.remove('inactive')
    document.querySelector('#Question' + i).classList.add('active', 'animate__animated', 'animate__backInLeft')
}

/* ====== start button ====== */

btnStart.addEventListener('click', quizStart)

function quizStart() {
    //console.log('clicked')
    document.querySelector('#conseilP').classList.remove('active')
    document.querySelector('#conseilP').classList.add('inactive')
    
    document.querySelector('#Question' + i).classList.remove('inactive')
    document.querySelector('#Question' + i).classList.add('active','animate__animated','animate__heartBeat')
    
    
}