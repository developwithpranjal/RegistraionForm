let steps = document.querySelectorAll(".details");
let form = document.querySelector(".RegForm");
let nextbtn = document.querySelectorAll(".nextbtn");
let submitbtn = document.querySelector(".submitbtn")
let currentStep = 0;

function showdetails(index) {
  steps.forEach((det) => det.classList.remove("active"));
  steps[index].classList.add("active");

//   console.log(index);
}

nextbtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      currentStep++;
      showdetails(currentStep);
    }
  });
});
