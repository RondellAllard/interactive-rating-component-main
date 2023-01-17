// // get the elements
// const submitBtn = document.querySelector("#feedback-submit");
const feedbackCard = document.querySelector("#card-contents");
const thankYouMessage = document.querySelector("#post-rating");
const valueP = document.querySelector("#selection-notification");

// listen for click on submit button

document.addEventListener('submit', function(e){
  e.preventDefault();
  let ratingValue = document.querySelector("input[name='rating']:checked").value;
  // hide the hidden div
  feedbackCard.style.display = "none";
  // show the visible div
  thankYouMessage.style.display = "flex";
  // set the value of the p tag
  valueP.innerHTML = `You ${ratingValue}  selected out of 5`;

})