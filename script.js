var numbers = document.getElementsByClassName('rating-state__number')
var ratingStateDiv = document.getElementById('ratingState')
var thankYouDiv = document.getElementById('thankYou')
var submitBtn = document.getElementById('submitBtn')
var choosenValueSpan = document.getElementById('choosenValue')
var classSelected = 'rating-state__number--selected'
var choosenValue = -1
var maximumChoiceValue = 5

for(let i = 0; i < numbers.length; i++){
   numbers[i].addEventListener('click', function(event) {
      removeAlreadySelectedClass()
      choosenValue = parseInt(event.target.id)
      event.target.classList.add(classSelected)
   })
}

submitBtn.addEventListener('click', function() {
   // hide the choice card and show the thank you card
   ratingStateDiv.style.display = 'none'
   thankYouDiv.style.display = 'flex'

   // add the choosen value to the element
   choosenValueSpan.innerHTML = choosenValue
})

function removeAlreadySelectedClass() {
   for(let i = 0; i < numbers.length; i++) {
      numbers[i].classList.remove(classSelected)
   }
}