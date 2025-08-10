
// 새 비밀번호 규칙 확인
function checkNewPwdRules(pwd) {
  // 8~16자, 대문자/소문자/숫자/특수문자 모두 포함
  const rule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  return rule.test(pwd);
}

// 중복 확인 버튼
function checkDuplicate() {
  const newPwd = document.getElementById("newPwd").value;
  const msg = document.getElementById("newMsg");

  if (!checkNewPwdRules(newPwd)) {
    msg.textContent = "비밀번호는 8~16자, 영문 대/소문자, 숫자, 특수문자를 모두 포함해야 합니다.";
  } else if (newPwd === savedPassword) {
    msg.textContent = "현재 비밀번호와 동일합니다.";
  } else {
    msg.textContent = "사용 가능한 비밀번호입니다.";
    msg.style.color = "green";
  }
}

// 비밀번호 확인
function checkConfirmPwd() {
  const newPwd = document.getElementById("newPwd").value;
  const confirmPwd = document.getElementById("confirmPwd").value;
  const msg = document.getElementById("confirmMsg");

  if (newPwd !== confirmPwd) {
    msg.textContent = "입력한 비밀번호와 맞지 않습니다.";
    return false;
  } else {
    msg.textContent = "";
    return true;
  }
}

// 최종 유효성 검사
function validateForm() {
  if (!checkCurrentPwd()) return;
  if (!checkNewPwdRules(document.getElementById("newPwd").value)) {
    alert("새 비밀번호 규칙을 확인하세요.");
    return;
  }
  if (!checkConfirmPwd()) return;

  alert("비밀번호 변경 완료!");
}

// 

const input = document.getElementById('input_info');
const errorMessage = document.getElementById('notice_input_wrong_info');

input.addEventListener('blur', function () {
  if (!this.value.trim()) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
});