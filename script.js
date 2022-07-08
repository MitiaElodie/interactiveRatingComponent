var numbers = document.getElementsByClassName('rating-state__number')
var ratingStateDiv = document.getElementById('ratingState')
var thankYouDiv = document.getElementById('thankYou')
var submitBtn = document.getElementById('submitBtn')
var chosenValueSpan = document.getElementById('chosenValue')
var classSelected = 'rating-state__number--selected'
var chosenValue = -1
var maximumChoiceValue = 5

for(let i = 0; i < numbers.length; i++){
   numbers[i].addEventListener('click', function(event) {
      removeAlreadySelectedClass()
      chosenValue = parseInt(event.target.id)
      event.target.classList.add(classSelected)
   })
}

submitBtn.addEventListener('click', function() {
   if(chosenValue !== -1 ) {
      // hide the choice card and show the thank you card
      ratingStateDiv.style.display = 'none'
      thankYouDiv.style.display = 'flex'
   
      // add the chosen value to the element
      chosenValueSpan.innerHTML = chosenValue
   } else {
      alert('Please choose a number')
   }
})

function removeAlreadySelectedClass() {
   for(let i = 0; i < numbers.length; i++) {
      numbers[i].classList.remove(classSelected)
   }
}