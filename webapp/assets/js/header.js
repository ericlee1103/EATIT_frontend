const buy = document.querySelectorAll('#header_nav > ul > li');
const dropdown = document.getElementById('header_nav_display');

buy.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    dropdown.style.display = 'flex';

    const buyMenu = dropdown.querySelector('.header_nav_buy');
    const commuMenu = dropdown.querySelector('.header_nav_commu');

    if (index === 0) {
      buyMenu.style.display = 'flex';
      commuMenu.style.display = 'none';
    } else if (index === 1) {
      buyMenu.style.display = 'none';
      commuMenu.style.display = 'flex';
    } else {
      dropdown.style.display = 'none';
    }
  });

  item.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!dropdown.matches(':hover')) {
        dropdown.style.display = 'none';
      }
    }, 100);
  });
});

dropdown.addEventListener('mouseleave', () => {
  dropdown.style.display = 'none';
});


