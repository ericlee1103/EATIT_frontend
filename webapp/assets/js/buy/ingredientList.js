document.addEventListener("DOMContentLoaded", () => {
  // 검색창 input 요소 가져오기
  const searchInput = document.getElementById("buy_search");
  // 아이템 전체를 담고 있는 컨테이너 요소 가져오기
  const itemsContainer = document.getElementById("buy_area");
  // 페이지네이션 버튼을 넣을 컨테이너 요소 가져오기
  const paginationContainer = document.getElementById("pagination");

  // 모든 아이템(가게 카드) 배열로 가져오기
  const allItems = Array.from(itemsContainer.querySelectorAll(".buy_food_article"));
  // 한 페이지당 보여줄 아이템 개수 설정
  const rowsPerPage = 8;
  // 현재 필터링된 아이템 (검색 결과용) 초기값은 전체 아이템 복사
  let filteredItems = [...allItems];
  // 현재 페이지 번호 초기값
  let currentPage = 1;

  /**
   * 검색어에 따라 아이템 필터링하는 함수
   * @param {string} keyword - 사용자가 입력한 검색어
   */
  function filterItems(keyword) {
    if (!keyword) {
      // 검색어가 비어있으면 전체 아이템 다시 복사
      filteredItems = [...allItems];
    } else {
      const lowerKeyword = keyword.toLowerCase(); // 소문자로 변환하여 대소문자 구분 없앰
      filteredItems = allItems.filter(item => {
        // 각 아이템에서 가게명과 메뉴명 텍스트 소문자로 가져오기
        const storeName = item.querySelector(".buy_store_name").textContent.toLowerCase();
        const menuName = item.querySelector(".buy_menu_name").textContent.toLowerCase();
        // 검색어가 가게명이나 메뉴명에 포함되어 있으면 true 반환
        return storeName.includes(lowerKeyword) || menuName.includes(lowerKeyword);
      });
    }
    // 검색 시 페이지를 1페이지로 초기화
    currentPage = 1;
    // 필터링된 아이템을 현재 페이지에 맞게 화면에 출력
    displayPage(currentPage);
    // 페이지네이션 버튼 다시 렌더링
    renderPagination();
  }

  /**
   * 특정 페이지 번호에 해당하는 아이템만 화면에 출력하는 함수
   * @param {number} page - 보여줄 페이지 번호
   */
  function displayPage(page) {
    // 기존 아이템 화면 초기화
    itemsContainer.innerHTML = "";

    // 해당 페이지에 보여줄 아이템의 시작, 끝 인덱스 계산
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    // 해당 범위에 포함되는 아이템만 추출
    const pageItems = filteredItems.slice(start, end);

    // 보여줄 아이템이 없으면 "검색 결과가 없습니다." 메시지 출력
    if (pageItems.length === 0) {
      itemsContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
      return;
    }

    // 추출된 아이템들을 itemsContainer에 추가하여 화면에 표시
    pageItems.forEach(item => itemsContainer.appendChild(item));
  }

  /**
   * 페이지네이션 버튼을 동적으로 만들어 렌더링하는 함수
   */
  function renderPagination() {
    // 기존 페이지네이션 버튼 초기화
    paginationContainer.innerHTML = "";

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(filteredItems.length / rowsPerPage);
    // 페이지가 1개 이하이면 페이지네이션 숨김 (버튼 안 만듦)
    if (totalPages <= 1) return;

    // 버튼들을 묶을 ul 생성
    const ul = document.createElement("ul");

    // 이전 페이지 버튼 생성
    const prevLi = document.createElement("li");
    prevLi.classList.add("buy_pagenation_box");
    prevLi.innerHTML = '<a href="#">&lt;</a>';
    prevLi.addEventListener("click", e => {
      e.preventDefault();
      // 현재 페이지가 1보다 크면 한 페이지 뒤로 이동
      if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);    // 페이지 내용 갱신
        renderPagination();          // 페이지네이션 갱신
        scrollToTop();               // 스크롤 맨 위로 이동
      }
    });
    ul.appendChild(prevLi);

    // 페이지 번호 버튼들 생성 (1, 2, 3, ...)
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.classList.add("buy_pagenation_box");
      // 현재 페이지면 active 클래스 추가 (스타일용)
      if (i === currentPage) li.classList.add("active");
      li.innerHTML = `<a href="#">${i}</a>`;
      li.addEventListener("click", e => {
        e.preventDefault();
        // 이미 선택된 페이지 클릭 시 아무 동작 안함
        if (currentPage === i) return;
        currentPage = i;
        displayPage(currentPage);    // 페이지 내용 갱신
        renderPagination();          // 페이지네이션 갱신
        scrollToTop();               // 스크롤 맨 위로 이동
      });
      ul.appendChild(li);
    }

    // 다음 페이지 버튼 생성
    const nextLi = document.createElement("li");
    nextLi.classList.add("buy_pagenation_box");
    nextLi.innerHTML = '<a href="#">&gt;</a>';
    nextLi.addEventListener("click", e => {
      e.preventDefault();
      // 현재 페이지가 마지막 페이지보다 작으면 한 페이지 앞으로 이동
      if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);    // 페이지 내용 갱신
        renderPagination();          // 페이지네이션 갱신
        scrollToTop();               // 스크롤 맨 위로 이동
      }
    });
    ul.appendChild(nextLi);

    // 완성된 ul을 페이지네이션 컨테이너에 추가
    paginationContainer.appendChild(ul);
  }

  // 검색 input에 이벤트 리스너 등록 (입력될 때마다 필터링 수행)
  searchInput.addEventListener("input", e => {
    filterItems(e.target.value);
  });

  /**
   * 스크롤을 페이지 최상단으로 부드럽게 이동시키는 함수
   */
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 페이지가 로드되면 전체 아이템 보여주기 (검색어 빈값)
  filterItems("");
});
