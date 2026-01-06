let steps = document.querySelectorAll(".details");
let form = document.querySelector(".RegForm");
let nextbtn = document.querySelectorAll(".nextbtn");
let submitbtn = document.querySelector(".submitbtn");
let result = document.querySelector(".result");
let currentStep = 0;

function showdetails(index) {
  steps.forEach((det) => det.classList.remove("active"));
  steps[index].classList.add("active");
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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = {};

  console.log(output);
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].classList.contains("nextbtn")) {
      continue;
    } else {
      output[form.elements[i].name] = form.elements[i].value;
    }
  }
  let text = document.createElement("div");
  form.style.display = "none"
  result.style.display = "block" 

  for (let x in output) {
    let p = document.createElement("p");
    p.textContent = `${x} : ${output[x]}`
    text.append(p);
     
  }
  result.append(text);

});
