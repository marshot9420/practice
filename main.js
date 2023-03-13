const tabBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");
const list = document.querySelector(".list");

const handleTab = (e) => {
  if (e.target === tabBtn[0]) {
    tabBtn[0].classList.add("orange");
  }
};

const handleTabBtn1 = (e) => {
  for (let i = 0; i < 3; i++) {
    tabBtn[i].classList.remove("orange");
    tabContent[i].classList.remove("show");
  }
  tabBtn[0].classList.add("orange");
  tabContent[0].classList.add("show");
};

const handleTabBtn2 = () => {
  for (let i = 0; i < 3; i++) {
    tabBtn[i].classList.remove("orange");
    tabContent[i].classList.remove("show");
  }
  tabBtn[1].classList.add("orange");
  tabContent[1].classList.add("show");
};

const handleTabBtn3 = () => {
  for (let i = 0; i < 3; i++) {
    tabBtn[i].classList.remove("orange");
    tabContent[i].classList.remove("show");
  }
  tabBtn[2].classList.add("orange");
  tabContent[2].classList.add("show");
};

tabBtn[0].addEventListener("click", handleTabBtn1);
tabBtn[1].addEventListener("click", handleTabBtn2);
tabBtn[2].addEventListener("click", handleTabBtn3);
