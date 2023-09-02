const adviceId = document.querySelector('.advice__number')
const adviceField = document.querySelector('.card__advice')
const generateAdviceBtn = document.querySelector('.card__dice__btn')

async function getAdvice() {
    fetch("	https://api.adviceslip.com/advice").then(obj => {
        return obj.json()
    }).then(result => {
        adviceId.innerHTML = `#${result.slip.id}`
        adviceField.innerHTML = `"${result.slip.advice}"`
    })
}
getAdvice() // init

generateAdviceBtn.addEventListener('click', () => getAdvice())