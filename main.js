const foto = document.getElementById("8ball")
const btn = document.getElementById("btn")
const text = document.getElementById("answer")

text.style.display = "none"

function prediction() {
  const answer = [
    "No",
    "Yes",
    "I don't think so...",
    "Of course!",
    "Indubitably",
    "In your dreams.",
    "Maybe",
    "Possibly yes",
    "Possibly no",
  ]
  const randomIndex = Math.floor(Math.random() * answer.length)
  // console.log(randomIndex)
  const randomAnswer = answer[randomIndex]

  return randomAnswer
}

btn.addEventListener("click", function () {
  foto.classList.add("shake")
  setTimeout(function () {
    const randomAnswer = prediction()
    document.getElementById("8ball").src =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
    text.style.display = "block"
    text.innerHTML = randomAnswer
  }, 2000)
})
