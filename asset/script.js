"use strict";

const viewBtn = document.querySelector("#viewBtn");
const aboutBtn = document.querySelector(".btn.read-more");
const contactBtn = document.querySelector("#contactBtn");

aboutBtn.addEventListener("click", function () {
  window.location.href = "/./asset/pages/about.html";
});

viewBtn.addEventListener("click", function () {
  window.location.href = "/./asset/pages/project.html";
});

contactBtn.addEventListener("click", function () {
  window.location.href = "https://t.me/@TaiwoKennyt";
});

document.getElementById("cvBtn").addEventListener("click", () => {
  window.open("asset/CV/hameedatCV.pdf", "_blank");
});

document.getElementById("nav-cvBtn").addEventListener("click", () => {
  window.open("asset/CV/hameedatCV.pdf", "_blank");
});
