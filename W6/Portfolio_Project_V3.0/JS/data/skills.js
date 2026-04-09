skills.forEach(s=>{
  let div = document.createElement('div');

  div.innerHTML = `
  <div class="bg-blue-50 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
    <h3 class="font-bold text-lg">${s.name}</h3>
    <p class="text-sm text-gray-500">${s.type}</p>
  </div>
  `;

  skillBox.appendChild(div);
});