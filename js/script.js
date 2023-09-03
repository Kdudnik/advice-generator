const adviceId = document.querySelector('.advice__number')
const adviceField = document.querySelector('.card__advice')
const generateAdviceBtn = document.querySelector('.card__dice__btn')

if(localStorage) uploadFromLocalStorage()
else getAdvice()

async function getAdvice() {
    fetch("	https://api.adviceslip.com/advice").then(obj => {
        return obj.json()
    }).then(result => {
        adviceId.innerHTML = `#${result.slip.id}`
        adviceField.innerHTML = `"${result.slip.advice}"`
        localStorage.setItem('activeAdviceId', result.slip.id)
        localStorage.setItem('activeAdvice', result.slip.advice)
    })
}

function uploadFromLocalStorage() {
    adviceId.innerHTML = `#${localStorage.getItem("activeAdviceId")}`
    adviceField.innerHTML = `"${localStorage.getItem("activeAdvice")}"`
}

generateAdviceBtn.addEventListener('click', () => getAdvice())