document.addEventListener("DOMContentLoaded", () => {
  const rowsPerPage = 5;           // 페이지당 게시글 수
  let currentPage = 1;             // 현재 페이지 번호

  const listBody = document.getElementById("post_list_body");
  const rows = Array.from(listBody.querySelectorAll(".list_row_flex_row"));
  const pagination = document.getElementById("pagination");
  const searchInput = document.querySelector(".search_text");
  const searchBtn = document.querySelector(".search_btn");

  let filteredRows = [...rows];   // 필터링된 게시글 리스트

  // 특정 페이지 게시글 표시
  function displayList(page) {
    listBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    filteredRows.slice(start, end).forEach(row => listBody.appendChild(row));
    updatePagination();
  }

  // 페이지 번호 생성 및 표시
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
        currentPage = i;
        displayList(currentPage);
      });
      pagination.appendChild(pageLink);
    }
  }

  // 검색어로 게시글 필터링
  function searchList() {
    const query = searchInput.value.trim().toLowerCase();
    filteredRows = rows.filter(row => row.textContent.toLowerCase().includes(query));
    currentPage = 1;
    displayList(currentPage);
  }

  // 검색 버튼 클릭 및 Enter 키 이벤트 등록
  searchBtn.addEventListener("click", searchList);
  searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchList();
    }
  });

  displayList(currentPage);
});

// 글쓰기 버튼 클릭 시 관리자 알림
document.addEventListener("DOMContentLoaded", () => {
  const writeBtn = document.getElementById("writeBtn");
  if (writeBtn) {
    writeBtn.addEventListener("click", e => {
      e.preventDefault();
      alert("관리자만 작성할 수 있습니다.");
      window.location.href = window.location.pathname;
    });
  }
});
