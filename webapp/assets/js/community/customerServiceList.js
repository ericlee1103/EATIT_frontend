document.addEventListener("DOMContentLoaded", () => {
  const rowsPerPage = 5;
  let currentPage = 1;

  const tableBody = document.getElementById("postTableBody");
  const rows = Array.from(tableBody.querySelectorAll("tr"));
  const pagination = document.getElementById("pagination");
  const searchInput = document.querySelector(".search_text");
  const searchBtn = document.querySelector(".search_btn");

  let filteredRows = [...rows];

  const displayTable = (page) => {
    tableBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    filteredRows.slice(start, end).forEach(row => tableBody.appendChild(row));
    updatePagination();
  };

  const updatePagination = () => {
    pagination.innerHTML = "";
    const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.textContent = i;
      pageLink.className = "page" + (i === currentPage ? " active" : "");
      pageLink.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        displayTable(currentPage);
      });
      pagination.appendChild(pageLink);
    }
  };

  const searchTable = () => {
    const query = searchInput.value.trim().toLowerCase();
    filteredRows = rows.filter(row => row.textContent.toLowerCase().includes(query));
    currentPage = 1;
    displayTable(currentPage);
  };

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchTable();
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchTable();
    }
  });

  displayTable(currentPage);
});
