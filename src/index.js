const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startCountdown)

let timeContainer = document.getElementById('time')

let toast = document.getElementById('toast')

let closeToast = document.getElementById('close-toast')

let toastMessage = document.getElementById('toast-message')

// closeToast.addEventListener('click', () => {
//   remainingTime = DURATION
//   toast.style.visibility ='hidden'
//   toast.classList.remove('show')
// })



// ITERATION 1: Add event listener to the start button

// Your code goes here ...




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  remainingTime = DURATION
  timeContainer.innerHTML = `${remainingTime}`

  timer = setInterval(() => {
    timeContainer.innerHTML = `${remainingTime}`
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰")
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    } else if (remainingTime <= 0) {
      showToast("Lift off! 🚀")
      clearInterval(timer)
      remainingTime = DURATION
      return
    } 
    remainingTime--

  }, 1000)

  // Your code goes here ...
}


// To test your function, call the showToast() function with different messages in the startCountdown() function:
// When the countdown timer is 10 seconds, show the message: "⏰ Final countdown! ⏰".
// When the countdown timer is 5 seconds, show the message: "Start the engines! 💥".
// When the countdown timer reaches 0, show the message: "Lift off! 🚀".

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // toast.style.visibility = 'visible'
  toast.classList.toggle('show')
  toastMessage.innerHTML = message

  setTimeout(() => {
    toast.classList.remove('show')
    // remainingTime = DURATION
  }, 3300)


  // Your code goes here ...


  
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  
  // Your code goes here ...
  
}

closeToast.addEventListener('click', () => {

  toast.classList.remove('show')
  // toast.style.visibility ='hidden'

})