console.log("JS file linked!");

const clickBtn = document.querySelector(".click");
const noClickBtn = document.querySelector(".no-click");

clickBtn.addEventListener("click", () => {
  alert("You clicked the black button!");
});

noClickBtn.addEventListener("click", () => {
  alert("You clicked the yellow button!");
});
