const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");

const toggler = document.querySelector(".navbar-toggler");
const listGroup = document.querySelector(".list-group");

const email = document.getElementById("exampleInputEmail1");
const pw = document.getElementById("exampleInputPassword1");
const pwAlert = document.querySelector(".pw-alert");
const submitBtn = document.getElementById("submit-btn");

const darkBtn = document.getElementById("dark-btn");

const gift = document.getElementById("gift");

const slideContainer = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prevBtn");
const slideBtn1 = document.querySelector(".slide-1");
const slideBtn2 = document.querySelector(".slide-2");
const slideBtn3 = document.querySelector(".slide-3");
const nextBtn = document.querySelector(".nextBtn");

const navbarBrand = document.getElementById("navbar-text");

const lorem = document.querySelector(".lorem");

let darkBtnCount = 0;
let giftCount = 5;
let transValue = 0;
let fontValue = 30;

const handleGift = () => {
  gift.style.display = "none";
};

const handleGiftCount = () => {
  gift.innerText = `${giftCount}초 이내 구매시 사은품 증정!`;
  giftCount = giftCount - 1;
  setTimeout(handleGift, 5000);
};

const handleDarkMode = () => {
  darkBtnCount = darkBtnCount + 1;
  if (darkBtnCount % 2 === 0) {
    darkBtn.innerText = "Dark";
  } else {
    darkBtn.innerText = "Light";
  }
};

const handleLoginAlert = (e) => {
  if (email.value === "" && pw.value === "") {
    e.preventDefault();
    alert("이메일과 비밀번호를 입력해 주세요!");
  } else if (email.value === "") {
    e.preventDefault();
    alert("이메일을 입력해 주세요!");
  } else if (pw.value === "") {
    e.preventDefault();
    alert("비밀번호를 입력해 주세요!");
  } else if (pw.value.length < 8) {
    e.preventDefault();
    alert("비밀번호를 8자 이상 입력해 주세요!");
  } else if (/\S+@\S+.\S+/.test(email.value)) {
    alert("이메일 형식으로 입력해 주세요.");
  }
};

const handleEmailInput = () => {};

const handlePwInput = () => {
  if (pw.value.length < 8) {
    pwAlert.innerText = "그런 비번 안받습니다. 8자 이상 쓰세요.";
  } else if (8 <= pw.value.length && pw.value.length < 12) {
    pwAlert.innerText = "조금만 더 길면 좋을듯.";
  } else if (12 <= pw.value.length) {
    pwAlert.innerText = "매...매우 안전한 비번이다...";
  }
};

listGroup.style.display = "none";

const handleListGroup = () => {
  if (listGroup.style.display === "none") {
    listGroup.style.display = "flex";
  } else {
    listGroup.style.display = "none";
  }
};

const handleModalOpen = () => {
  modal.style.display = "block";
};

const handleModalClose = () => {
  modal.style.display = "none";
};

const handleSlider1 = () => {
  slideContainer.style.transform = "translateX(0vw)";
};

const handleSlider2 = () => {
  slideContainer.style.transform = `translateX(-100vw)`;
};

const handleSlider3 = () => {
  slideContainer.style.transform = `translateX(-200vw)`;
};

const handleSlidePrev = () => {
  transValue = transValue + 100;
  slideContainer.style.transform = `translateX(${transValue}vw)`;
};

const handleSlideNext = () => {
  transValue = transValue - 100;
  slideContainer.style.transform = `translateX(${transValue}vw)`;
};

const handleNavbarFontDown = () => {
  fontValue = fontValue - 1;
  navbarBrand.style.fontSize = `${fontValue}px`;
};

const handleNavbarFontUp = () => {
  fontValue = fontValue + 1;
  navbarBrand.style.fontSize = `${fontValue}px`;
};

toggler.addEventListener("click", handleListGroup);
openBtn.addEventListener("click", handleModalOpen);
closeBtn.addEventListener("click", handleModalClose);
submitBtn.addEventListener("click", handleLoginAlert);
pw.addEventListener("input", handlePwInput);
darkBtn.addEventListener("click", handleDarkMode);
setInterval(handleGiftCount, 1000);
slideBtn1.addEventListener("click", handleSlider1);
slideBtn2.addEventListener("click", handleSlider2);
slideBtn3.addEventListener("click", handleSlider3);
if (transValue < 0) {
  prevBtn.addEventListener("click", handleSlidePrev);
}
nextBtn.addEventListener("click", handleSlideNext);
window.addEventListener("scroll", handleNavbarFontDown);
window.addEventListener("scroll", handleNavbarFontUp);
