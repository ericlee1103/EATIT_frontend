const dowritebtn = document.getElementById('admin_notice_dowrite');

dowritebtn.addEventListener('click', () =>{
  if(!confirm('이대로 수정하시겠습니까?'))
    return;
    location.replace('./../../app/admin/bannerDetail.html');
})