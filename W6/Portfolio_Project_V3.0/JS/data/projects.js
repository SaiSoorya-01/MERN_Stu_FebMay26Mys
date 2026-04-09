function render(data){
  container.innerHTML = "";

  data.forEach((p,i)=>{
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2">
      <h3 class="text-xl font-bold mb-2">${p.name}</h3>
      <p id="d-${i}" class="text-gray-600 mb-3">${p.desc.slice(0,50)}...</p>
      <button onclick="toggle(${i})" class="text-blue-600 font-semibold">View More</button>
    </div>
    `;

    container.appendChild(div);
  });

  count.textContent = data.length+" Projects Found";
}