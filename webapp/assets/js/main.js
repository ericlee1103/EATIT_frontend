//배너 이동
const slideBox = document.querySelector(".main_slide_box");
const slideImg = document.querySelectorAll(".main_slide_img"); 
const prevBtn = document.querySelector(".main_banner_prev");
const nextBtn = document.querySelector(".main_banner_next");
const slidesWrap = document.querySelector('.main_banner_middle');



//슬라이드 가로 설정
const slideWidth = 1920;
let currentIdx = 0;
const slideCnt = slideImg.length;

//처음과 마지막 슬라이드 체크 함수
function checkEnd() {
  prevBtn.style.display = currentIdx <= 0 ? "none" : "block";
  nextBtn.style.display = currentIdx >= slideCnt - 1 ? "none" : "block";
}

//다음 슬라이드로 이동 함수
function nextMove() {
  currentIdx++;
  if (currentIdx >= slideCnt) {
    currentIdx = 0;
  }
  slideBox.style.left = `-${currentIdx * slideWidth}px`;
  slideBox.style.transition = '5s ease';
  checkEnd();
}

//이전슬라이드로 이동 함수
function prevMove() {
  currentIdx--;
  if (currentIdx < 0) {
    currentIdx = slideCnt - 1;
  }
  slideBox.style.left = `-${currentIdx * slideWidth}px`;
  slideBox.style.transition = "4s ease";
  checkEnd();
}

//자동 슬라이드 시작 함수
function startSlide() {
  slideInterval = setInterval(() => {
    nextMove();
  }, 5000);
}

//자동 슬라이드 정지 함수
function stopSlide() {
  clearInterval(slideInterval);
}

startSlide();

const articles = document.querySelectorAll('.main_food_buy_article');
const prev = document.querySelector('.main_content_prev a');
const next = document.querySelector('.main_content_next a');

let startIndex = 0;      // 보이는 첫번째 인덱스
const visibleCount = 4;  // 한 번에 보일 개수
const total = articles.length;

function updateVisible() {
  articles.forEach((el, idx) => {
    if (idx >= startIndex && idx < startIndex + visibleCount) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

// 초기 보이기
updateVisible();

// 다음 버튼 클릭
next.addEventListener('click', e => {
  e.preventDefault();
  if (startIndex + visibleCount < total) {
    startIndex++;
    updateVisible();
  }
});

// 이전 버튼 클릭
prev.addEventListener('click', e => {
  e.preventDefault();
  if (startIndex > 0) {
    startIndex--;
    updateVisible();
  }
});

