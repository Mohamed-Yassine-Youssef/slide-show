images = document.getElementsByTagName("img");
chevron = document.querySelectorAll(".fa-solid");
divs = document.getElementsByClassName("btn");

divs[0].onclick = function () {
  images[0].style.transform = "translateX(0%)";
  images[1].style.transform = "translateX(0%)";
  images[2].style.transform = "translateX(0%)";
  images[3].style.transform = "translateX(0%)";
  for (i = 0; i < 4; i++) {
    divs[i].classList.remove("active");
  }
  this.classList.add("active");
};

divs[1].onclick = function () {
  images[1].style.transform = "translateX(-100%)";
  images[0].style.transform = "translateX(-100%)";
  images[2].style.transform = "translateX(-100%)";
  images[3].style.transform = "translateX(-200%)";

  for (i = 0; i < 4; i++) {
    divs[i].classList.remove("active");
  }
  this.classList.add("active");
};

divs[2].onclick = function () {
  images[1].style.transform = "translateX(-200%)";
  images[0].style.transform = "translateX(-200%)";
  images[2].style.transform = "translateX(-200%)";
  images[3].style.transform = "translateX(-200%)";

  for (i = 0; i < 4; i++) {
    divs[i].classList.remove("active");
  }
  this.classList.add("active");
};

divs[3].onclick = function () {
  images[1].style.transform = "translateX(-200%)";
  images[0].style.transform = "translateX(-300%)";
  images[2].style.transform = "translateX(-300%)";
  images[3].style.transform = "translateX(-300%)";

  for (i = 0; i < 4; i++) {
    divs[i].classList.remove("active");
  }
  this.classList.add("active");
};
