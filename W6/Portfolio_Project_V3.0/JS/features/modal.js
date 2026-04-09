const modal = document.getElementById('modal');

document.getElementById('modal-btn').onclick = ()=>{
  modal.classList.remove('hidden');
};

document.getElementById('close').onclick = ()=>{
  modal.classList.add('hidden');
};