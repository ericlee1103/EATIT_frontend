window.addEventListener('DOMContentLoaded', () => {
  // 헤더 불러오기
  fetch('./../../header_login.html')
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

document.addEventListener("DOMContentLoaded", () => {
  const currentPasswordInput = document.getElementById("current_password");
  const errorMessage = document.getElementById("current_password_error");
  const newPasswordInput = document.getElementById("new_password");
  const confirmPasswordInput = document.getElementById("confirm_password");

  // 예시: 올바른 비밀번호 (실제로는 서버에서 확인해야 함)
  const correctPassword = "1234abcd";

  // 초기에 새 비밀번호 입력창 비활성화
  newPasswordInput.disabled = true;
  confirmPasswordInput.disabled = true;

  currentPasswordInput.addEventListener("blur", () => {
    const enteredPassword = currentPasswordInput.value;

    if (enteredPassword !== correctPassword) {
      errorMessage.textContent = "*현재 비밀번호와 일치하지 않습니다.";
      errorMessage.style.color = "red";

      // 입력 비활성화
      newPasswordInput.disabled = true;
      confirmPasswordInput.disabled = true;

      // 내용 초기화
      newPasswordInput.value = "";
      confirmPasswordInput.value = "";
    } else {
      errorMessage.textContent = "";
      newPasswordInput.disabled = false;
      confirmPasswordInput.disabled = false;
    }
  });
});

const newPasswordInput = document.getElementById("new_password");
const newPasswordError = document.getElementById("new_password_error");

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

const confirmPasswordInput = document.getElementById("confirm_password");
const confirmPasswordError = document.getElementById("confirm_password_error");

confirmPasswordInput.addEventListener("input", () => {
  const newPassword = document.getElementById("new_password").value;
  const confirmPassword = confirmPasswordInput.value;

  if (newPassword !== confirmPassword) {
    confirmPasswordError.textContent = "입력하신 비밀번호와 일치하지 않습니다.";
    confirmPasswordError.style.color = "red";
  } else {
    confirmPasswordError.textContent = "";
  }
});