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

const btn = document.getElementsByClassName('findPw_btn');

btn[0].addEventListener('click', () => {
  location.replace('./../../app/findPW/editPw.html');
  alert('문자로 임시비밀번호가 발송되었습니다.')
});