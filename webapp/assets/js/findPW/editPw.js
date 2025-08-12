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

// 비밀번호 검증
const dbPs = 'useruser123?'

// 비밀번호 정규식 패턴 정의
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;

// 

document.addEventListener('DOMContentLoaded', function () {
  const oldPasswordInput = document.getElementById('findPw_edit_oldPw');
  const newPasswordInput = document.getElementById('findPw_edit_newPw');
  const confirmNewPasswordInput = document.getElementById('findPw_edit_newPw_chk');
  const submitButton = document.querySelector('.findPw_edit_btn');

  // 현재 비밀번호 검사
  oldPasswordInput.addEventListener('input', function () {
    const warningSpan = document.getElementById('oldPwWarning');

    if (!this.value) {
      warningSpan.textContent = '현재 비밀번호를 입력해주세요';
      warningSpan.style.display = 'block';
    } else if (this.value !== 'useruser123?') {
      warningSpan.textContent = '현재 비밀번호가 일치하지 않습니다';
      warningSpan.style.display = 'block';
    } else {
      warningSpan.style.display = 'none';
    }
  });

  // 새 비밀번호 유효성 검사
  newPasswordInput.addEventListener('input', function () {
    const warningSpan = document.getElementById('newPwWarning');

    if (!this.validity.valid) {
      if (this.value.length < 8 || this.value.length > 16) {
        warningSpan.textContent = '비밀번호는 8~16자리여야 합니다';
      } else if (!this.value.match(/(?=.*[a-z])/)) {
        warningSpan.textContent = '소문자가 포함되어야 합니다';
      } else if (!this.value.match(/(?=.*[A-Z])/)) {
        warningSpan.textContent = '대문자가 포함되어야 합니다';
      } else if (!this.value.match(/(?=.*\d)/)) {
        warningSpan.textContent = '숫자가 포함되어야 합니다';
      } else if (!this.value.match(/(?=.*[@$!%*?&])/)) {
        warningSpan.textContent = '특수문자가 포함되어야 합니다';
      }
      warningSpan.style.display = 'block';
    } else {
      warningSpan.style.display = 'none';
    }
  });

  // 비밀번호 확인 검사
  confirmNewPasswordInput.addEventListener('input', function () {
    const warningSpan = document.getElementById('confirmPwWarning');

    if (this.value !== newPasswordInput.value) {
      warningSpan.textContent = '새 비밀번호와 일치하지 않습니다';
      warningSpan.style.display = 'block';
    } else {
      warningSpan.style.display = 'none';
    }
  });

  // 수정 버튼 활성화 상태 관리
  function updateSubmitButtonState() {
    const isValidOldPassword = oldPasswordInput.value === 'useruser123?';
    const isNewPasswordValid = !newPasswordInput.validity.patternMismatch &&
      !newPasswordInput.validity.tooShort &&
      !newPasswordInput.validity.tooLong;
    const isNewPasswordConfirmed = confirmNewPasswordInput.value === newPasswordInput.value;

    submitButton.classList.toggle('active',
      isValidOldPassword && isNewPasswordValid && isNewPasswordConfirmed);
    submitButton.disabled = !(isValidOldPassword && isNewPasswordValid && isNewPasswordConfirmed);
  }

  [oldPasswordInput, newPasswordInput, confirmNewPasswordInput].forEach(input => {
    input.addEventListener('input', updateSubmitButtonState);
  });

  // 제출 버튼 클릭 이벤트
  submitButton.addEventListener('click', function (e) {
    const warningDiv = document.getElementById('findPw_edit_warning_message');

    if (!oldPasswordInput.value) {
      warningDiv.textContent = '현재 비밀번호를 입력해주세요';
      return;
    }

    if (oldPasswordInput.value !== 'useruser123?') {
      warningDiv.textContent = '현재 비밀번호가 일치하지 않습니다';
      return;
    }

    if (!newPasswordInput.validity.valid) {
      warningDiv.textContent = '새 비밀번호가 유효하지 않습니다';
      return;
    }

    if (newPasswordInput.value !== confirmNewPasswordInput.value) {
      warningDiv.textContent = '비밀번호가 일치하지 않습니다';
      return;
    }

    console.log('서버로 전송할 데이터:', {
      oldPassword: oldPasswordInput.value,
      newPassword: newPasswordInput.value
    });
    warningDiv.textContent = '비밀번호가 성공적으로 변경되었습니다';
  });
});