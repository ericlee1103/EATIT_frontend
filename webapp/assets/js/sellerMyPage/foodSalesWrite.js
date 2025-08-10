// 파일 선택 시 미리보기 업데이트
document.getElementById('food_write_photo').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('food_write_image_preview').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// 음식 설명 글자 수 표시
const description = document.getElementById('food_write_explain');
const charCount = document.getElementById('food_write_char_count');

description.addEventListener('input', function () {
  charCount.textContent = `${description.value.length}/100`;
});