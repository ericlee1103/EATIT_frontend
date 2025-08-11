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

let edit_store_info_btn = document.getElementById('edit_store_info_btn');
edit_store_info_btn.addEventListener('click', () => {
  //가게 상세 정보 수정 -> 개인정보 수정창으로
  location.replace('./../sellerMyPage/editSellerInfo.html');
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("editModal");
    const editBtn = document.getElementById("edit_store_origin_btn");
    const closeModal = document.getElementById("closeModal");
    const editForm = document.getElementById("editForm");

    editBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const foodName = document.getElementById("foodName").value;
        const origin = document.getElementById("origin").value;
        const product = document.getElementById("product").value;

        console.log("수정된 값:", { foodName, origin, product });

        alert("수정이 완료되었습니다!");
        modal.style.display = "none";
    });
});
