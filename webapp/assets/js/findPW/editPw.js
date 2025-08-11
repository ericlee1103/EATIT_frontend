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


const btn = document.getElementsByClassName('findPw_edit_btn');

btn[0].addEventListener('click', () => {
  location.replace('./../../app/logIn/login.html');
});

const to_main_btn = document.getElementsByClassName('findId_clear_to_main');
to_main_btn[0].addEventListener('click', () => {
  location.replace('./../../main.html');
  // alert('문자로 인증번호가 발송되었습니다.')
});

const to_login_btn = document.getElementsByClassName('findId_clear_to_login');
to_login_btn[0].addEventListener('click', () => {
  location.replace('./../logIn/login.html');
  // alert('문자로 인증번호가 발송되었습니다.')
});