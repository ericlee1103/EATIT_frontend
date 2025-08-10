document.addEventListener("DOMContentLoaded", () => {
  const rowsPerPage = 2;
  let currentPage = 1;

  const tableBody = document.getElementById("postTableBody");
  const allRows = Array.from(tableBody.querySelectorAll("tr"));
  const pagination = document.getElementById("pagination");
  const searchInput = document.querySelector(".search_text");
  const searchBtn = document.querySelector(".search_btn");

  // 추천 수 로드
  function loadRecommendations() {
    allRows.forEach(row => {
      const postId = row.dataset.id;
      const count = localStorage.getItem(`recommend_${postId}`) || 0;
      row.querySelector(".recommend_count").textContent = count;
    });
  }

  // 테이블 표시
  function displayTable(page, dataRows) {
    tableBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const slicedRows = dataRows.slice(start, end);
    slicedRows.forEach(row => tableBody.appendChild(row));
  }

  // 페이지네이션 생성
  function setupPagination(dataRows) {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(dataRows.length / rowsPerPage);
    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("a");
      btn.classList.add("page");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentPage = i;
        displayTable(currentPage, dataRows);
        setupPagination(dataRows);
      });
      pagination.appendChild(btn);
    }
  }

  // 검색 기능
  function filterRows() {
    const keyword = searchInput.value.toLowerCase();
    return allRows.filter(row => {
      const title = row.querySelector(".title").textContent.toLowerCase();
      return title.includes(keyword);
    });
  }

  searchBtn.addEventListener("click", () => {
    const filtered = filterRows();
    currentPage = 1;
    displayTable(currentPage, filtered);
    setupPagination(filtered);
  });

  // 초기 실행
  loadRecommendations();
  displayTable(currentPage, allRows);
  setupPagination(allRows);
});
