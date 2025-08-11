document.addEventListener("DOMContentLoaded", () => {
  const rowsPerPage = 3;
  let currentPage = 1;

  const listBody = document.getElementById("buy_food_section");
  const pagination = document.getElementById("pagination");

  // 모든 게시글 div (list_row) 배열로 저장
  const allRows = Array.from(listBody.querySelectorAll(".buy_food_menu_list"));
  let filteredRows = [...allRows]; // 필터링된 게시글 초기값

  function displayList(page) {
    listBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    filteredRows.slice(start, end).forEach(row => listBody.appendChild(row));
    updatePagination();
  }

  function updatePagination() {
    pagination.innerHTML = "";
    const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.textContent = i;
      pageLink.className = "page" + (i === currentPage ? " active" : "");
      pageLink.addEventListener("click", e => {
        e.preventDefault();
        if (currentPage === i) return;
        currentPage = i;
        displayList(currentPage);
      });
      pagination.appendChild(pageLink);
    }
  }

  // 초기 페이지 표시(처음엔 첫페이지니까 1로설정)
  displayList(currentPage);
});