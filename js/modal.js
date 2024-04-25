document.querySelector(".menu-btn").onclick = function () {
  document.querySelector(".mobil-menu").classList.add("is-open");
};

document.querySelector(".btn-close").onclick = function () {
  document.querySelector(".mobil-menu").classList.remove("is-open");
};

document.querySelector(".button-one").onclick = function () {
  document.querySelector(".backdrop").classList.add("is-open");
};

document.querySelector(".close-btn").onclick = function () {
  document.querySelector(".backdrop").classList.remove("is-open");
};
