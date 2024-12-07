// import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elemC = document.querySelectorAll(".elem");
let fixedImage = document.querySelector("#fixed-image");

elemC.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let image = elem.getAttribute("data-image");
    fixedImage.style.backgroundImage = `url(${image})`;
  });
  elem.addEventListener("mouseleave", function () {
    fixedImage.style.backgroundImage = "";
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
});

var desc = document.querySelector("#desc");
var Design = document.querySelector("#Design");
var design = document.querySelector("#design");
var Project = document.querySelector("#Project");
var Execution = document.querySelector("#Execution");
var image = document.querySelector("#page4-img");

Design.addEventListener("click", function () {
  desc.textContent =
    "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
  var add = Design.getAttribute("data-img");
  image.setAttribute("src", `${add}`);
  Project.style.right = "0vw";
  Design.style.right = "2vw";
  design.style.color = "#EFEAE3";
  Execution.style.right = "0vw";
  Execution.style.color = "#504A45";
  Project.style.color = "#504A45";
});

Project.addEventListener("click", function () {
  desc.textContent =
    "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
  var add = Project.getAttribute("data-img");
  image.setAttribute("src", `${add}`);
  Project.style.right = "2vw";
  Project.style.color = "#EFEAE3";
  Design.style.right = "0vw";
  design.style.color = "#504A45";
  Execution.style.color = "#504A45";
  Execution.style.right = "0vw";
});

Execution.addEventListener("click", function () {
  desc.textContent =
    "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
  var add = Execution.getAttribute("data-img");
  image.setAttribute("src", `${add}`);
  Project.style.right = "0vw";
  Design.style.right = "0vw";
  Execution.style.right = "2vw";
  Execution.style.color = "#EFEAE3";
  Project.style.color = "#504A45";
  design.style.color = "#504A45";
});