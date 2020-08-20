const burger = document.querySelector(".main__burger");
const nav = document.querySelector(".main__navigation2");

burger.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});
