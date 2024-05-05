 document.querySelector(".mob-menu-btn").onclick = function () {
  document.querySelector(".mobile-menu").classList.add("is-open");
 };

document.querySelector(".mob-close-btn").onclick = function () {
   document.querySelector(".mobile-menu").classList.remove("is-open");
 };

 document.querySelector(".button-one").onclick = function () {
  document.querySelector(".backdrop").classList.add("is-open");
 };

 document.querySelector(".close-btn").onclick = function () {
  document.querySelector(".backdrop").classList.remove("is-open");
 };
