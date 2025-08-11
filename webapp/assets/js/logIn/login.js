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

let warning = document.getElementById('login_warning_message');
let id = document.getElementById('login_input_id');
let pw = document.getElementById('login_input_pw'); 
let login = document.getElementById('login_btn');


console.log(login);
console.log(warning);
console.log(id, pw);

const db = {
  id : 'user',
  pw : 'useruser123',
}

login.addEventListener('click', () => {
  // e.preventDefault();

  if(id.value === db.id && pw.value === db.pw){
    window.location.href = 'main.html';
  }else{
    // warning.style.display = 'block';
    warning.textContent = '아이디 혹은 비밀번호를 다시 확인해주세요'
    warning.style.color='red';
    alert('아이디 혹은 비밀번호를 다시 확인해주세요');

    pw.focus();
    pw.select();
  }
});


// btn[0].addEventListener('click', () => {
//   if(!id || !pw){
//   }
//   location.replace('./../../app/findPW/editPw.html');
//   alert('문자로 임시비밀번호가 발송되었습니다.')
// });