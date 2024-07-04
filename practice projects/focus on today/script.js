const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputList = document.querySelectorAll('.goal-input')
const error = document.querySelector('.error')
const changingQuote = document.querySelector('.changingQuote')
const progress = document.querySelector('.progress')
const awaj = document.querySelector('.awaj')
const progressValue = document.querySelector('.progress-value')
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {}
let completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length;
const totalGoalsCount = Object.values(allGoals).length

progressValue.innerText = `Completed ${completedGoalsCount}/${totalGoalsCount} `
progress.style.width = `${completedGoalsCount / totalGoalsCount * 100}%`

const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill',
]
changingQuote.innerText = `${allQuotes[completedGoalsCount]} `

checkBoxList.forEach((checkBox) => {
    checkBox.addEventListener("click", (e) => {
       

        const allFieldsFilled = [...inputList].every((input) => {
            return input.value
        })
        if (allFieldsFilled) {
            checkBox.parentElement.classList.toggle('true')
            const inputid = checkBox.nextElementSibling.id
            allGoals[inputid].completed = !allGoals[inputid].completed
            completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length;
            if (completedGoalsCount === totalGoalsCount) {
                awaj.play()
            }
            progress.style.width = `${completedGoalsCount / totalGoalsCount * 100}%`
            progressValue.innerText = `Completed ${completedGoalsCount}/${totalGoalsCount} `
            changingQuote.innerText = `${allQuotes[completedGoalsCount]} `
            localStorage.setItem("allGoals", JSON.stringify(allGoals))


        } else {
            error.classList.add("show-error")
        }

    })
})

inputList.forEach((input) => {
    if (allGoals[input.id]) {
        input.value = allGoals[input.id].task;
    }

    if (allGoals[input.id]?.completed) {
        input.parentElement.classList.add("true")
    }
    else {
        input.parentElement.classList.remove("true")
    }
    input.addEventListener("focus", (e) => {
        error.classList.remove("show-error")
    })


    input.addEventListener("input", (e) => {
        if (allGoals[input.id].completed) {
            input.value = allGoals[input.id].task
            return
        }
        allGoals[input.id] = {
            task: input.value,
            completed: false
        }
        completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length;
        localStorage.setItem("allGoals", JSON.stringify(allGoals))

    })
})