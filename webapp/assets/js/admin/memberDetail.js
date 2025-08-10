const warningbtn = document.getElementById('button_warning');

warningbtn.addEventListener('click', () =>{
  if(!confirm('경고를 주시겠습니까?'))
    return;
})