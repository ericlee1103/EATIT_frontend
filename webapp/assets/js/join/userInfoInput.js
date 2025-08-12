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

// editUserInfo.js 파일 내에 추가
document.addEventListener("DOMContentLoaded", function () {
  const saveButtons = document.querySelectorAll(".info_save_buzz");

  saveButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      alert("정보가 정상적으로 수정되었습니다.");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const saveButtons = document.querySelectorAll(".total_info_save_buzz");

  saveButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      alert("정보가 정상적으로 수정되었습니다.");
    });
  });
});

//비밀번호 입력값
const errorMessage = document.getElementById("warning_message_chk_pw");
const newPasswordInput = document.getElementById("user_input_pw");
const confirmPasswordInput = document.getElementById("user_input_chk_pw");

const newPassword = newPasswordInput.value.trim();
const confirmPassword = confirmPasswordInput.value.trim();

// 비밀번호 유효성 검사 정규표현식
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;

newPasswordInput.addEventListener("input", () => {
  const newPassword = newPasswordInput.value;

  if (!passwordRegex.test(newPassword)) {
    newPasswordError.textContent = "비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.";
    newPasswordError.style.color = "red";
  } else {
    newPasswordError.textContent = "";
  }
});


confirmPasswordInput.addEventListener("input", () => {
  const newPassword = document.getElementById("new_password").value;
  const confirmPassword = confirmPasswordInput.value;

  if (newPassword !== confirmPassword) {
    errorMessage.textContent = "입력하신 비밀번호와 일치하지 않습니다.";
    errorMessage.style.color = "red";
  } else {
    errorMessage.textContent = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  //인증요청, 인증 확인 버튼
  const sendCodeBtn = document.getElementById("btn_user_input_phone");
  const checkCodeBtn = document.getElementById("btn_user_input_chk_phone");

  //전화번호 입력
  const phoneInput = document.getElementById("user_input_phone");
  const phoneError = document.getElementById("warning_message_chk_phone");

  //전화번호 인증 입력
  const codeInput = document.getElementById("user_input_chk_phone");
  const codeError = document.getElementById("warning_message_chk_phone");

  // 미리 저장한 인증번호
  const generatedCode = "1234";


  //전화번호 유효성 검증
  function isValidPhone(phone) {
    const phoneRegex = /^01[0-9]{8,9}$/;
    return phoneRegex.test(phone);
  }

  //전화번호 확인
  sendCodeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // 전화번호 값만 저장
    const phone = phoneInput.value.trim();
    phoneError.textContent = "";

    if (!isValidPhone(phone)) {
      phoneError.textContent = "전화번호를 입력해주세요.";
    } else {
      alert("인증번호가 전송되었습니다.");
    }
  });

  //인증번호 확인
  checkCodeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //인증번호 값만 저장
    const inputCode = codeInput.value.trim();
    codeError.textContent = "";

    if (inputCode !== generatedCode) {
      codeError.textContent = "인증번호가 일치하지 않습니다.";
    } else {
      alert("인증되었습니다.");
    }
  });
});