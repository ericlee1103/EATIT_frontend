//배너 이동
const slideBox = document.querySelector(".main_slide_box");
const slideImg = document.querySelectorAll(".main_slide_img");
const prevBtn = document.querySelector(".main_banner_prev");
const nextBtn = document.querySelector(".main_banner_next");
const slidesWrap = document.querySelector('.main_banner_middle');

//슬라이드 설정
const slideWidth = 1920;
let currentIdx = 0;
const slideCnt = slideImg.length;

//처음과 마지막 슬라이드 체크 함수
function checkEnd(){
  prevBtn.style.display = currentIdx <= 0 ? "none" : "block";
  nextBtn.style.display = currentIdx >= slideCnt-1 ? "none" : "block";
}

//다음 슬라이드로 이동 함수
function nextMove(){
  currentIdx++;
  if(currentIdx >= slideCnt){
    currentIdx = 0;
  }
  slideBox.style.left = `-${currentIdx * slideWidth}px`;
  slideBox.style.transition = '2s ease';
  checkEnd();
}

//이전슬라이드로 이동 함수
function prevMove(){
  currentIdx--;
  if(currentIdx < 0){
    currentIdx = slideCnt - 1;
  }
  slideBox.style.left = `-${currentIdx * slideWidth}px`;
  slideBox.style.transition = "2s ease";
  checkEnd();
}

//자동 슬라이드 시작 함수
function startSlide(){
  slideInterval = setInterval(() => {
    nextMove();
  }, 3000);
}

//자동 슬라이드 정지 함수
function stopSlide(){
  clearInterval(slideInterval);
}

startSlide();

