window.addEventListener('DOMContentLoaded', () => {
  // 헤더 불러오기
  fetch('./../../header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // 푸터 불러오기
  fetch('./../../footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});

function goNextPage() {
  const checkbox = document.querySelectorAll("input[type='checkbox']");
  const essenAgree = document.querySelectorAll("input[name='essenAgree']");
  let agreeAll = document.querySelectorAll('input[name="joinAgreeAll"]');

  checkbox.forEach((checkbox) => {
    // 전체동의 여부 확인
    if (!checkbox.checked) {
      agreeAll.checked = false;
    }
  });

  // 필수동의 여부 확인
  essenAgree.forEach((essenAgree)=>{
    if(!essenAgree.checked){
      alert("필수 약관에 동의해야 다음단계로 이동할 수 있습니다.");
      return;
    }
  })
  //모든 체크박스 체크 시 다음 페이지로 이동
  location.href = "userInfoInput.html";
}

//전체동의
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.filter = Array.prototype.filter;

const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");
console.log(all);
console.log(terms);

//전체동의 체크박스를 클릭할 때 마다 실행되는 이벤트 리스너
all.addEventListener('click', () => {
  terms.forEach((term) => {
    console.log(term);
    term.checked = all.checked;
  });
});

//약관동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스터
terms.forEach((term) => {
  term.addEventListener('click', () =>{
    all.checked = terms.map((term) => term.checked).filter((checked) => checked).length === terms.length;
    //terms.map((term) => term.checked) : 3개의 약관동의 체크박스들의 checked 속성값을 배열로 매핑
    //.filter((checked) => checked) : checked가 true인 요소만 걸러냄
    //.length === 3 : 체크박스에 선택된 개수가 3개인지 확인
  });
});