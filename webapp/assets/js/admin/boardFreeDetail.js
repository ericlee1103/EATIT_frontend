const deletebtn = document.getElementById('admin_deletebtn');

deletebtn.addEventListener('click', () =>{
  if(!confirm('정말 삭제하시겠습니까?'))
    return;
    location.replace('./../../app/admin/boardFreeList.html');
})