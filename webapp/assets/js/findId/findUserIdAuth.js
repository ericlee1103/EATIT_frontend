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

const rep_btn = document.getElementsByClassName('findIdAuth_req_auth');

rep_btn[0].addEventListener('click', () => {
  // location.replace('./../../app/findId/editPw.html');
  alert('문자로 인증번호가 발송되었습니다.')
});

const chk_rep_btn = document.getElementsByClassName('findIdAuth_chk_auth');
const findId_btn = document.getElementsByClassName('findId_btn');

chk_rep_btn[0].addEventListener('click', () => {
  // 인증번호 검증
});

findId_btn[0].addEventListener('click', () => {
  // 인증번호 확인 후 페이지 이동
  location.replace('./../../app/findId/findUserIdSuccess.html');
});
