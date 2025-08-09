document.addEventListener('DOMContentLoaded', () => {
  const recommendBtn = document.getElementById('recommendBtn');
  const likesSpan = document.querySelector('.likes');
  const counterRecommend = document.querySelector('#recommendCount');

  recommendBtn.addEventListener('click', () => {
    // 현재 '추천 0'에서 숫자만 추출
    let currentLikes = parseInt(likesSpan.textContent.replace('추천 ', ''), 10);
    currentLikes++;
  
    // 변경된 숫자 넣기
    likesSpan.textContent = `추천 ${currentLikes}`;
    counterRecommend.textContent = `추천 ${currentLikes}`;

    // 숫자 애니메이션 효과
    likesSpan.classList.add('bump');
    setTimeout(() => {
      likesSpan.classList.remove('bump');
    }, 300);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  // ===== 댓글 추천 버튼 =====
  const commentRecommendButtons = document.querySelectorAll('.comment_recommend_container .recommend');

  commentRecommendButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const countElement = btn.parentElement.querySelector('.recommend_count');
      let currentCount = parseInt(countElement.textContent, 10);
      countElement.textContent = ++currentCount;

      // 애니메이션 효과
      countElement.classList.add('bump');
      setTimeout(() => countElement.classList.remove('bump'), 300);
    });
  });
});
