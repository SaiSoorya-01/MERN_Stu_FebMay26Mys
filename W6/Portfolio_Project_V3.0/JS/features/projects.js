let filtered = [...projects];

const container = document.getElementById('projects-container');
const count = document.getElementById('count');

function render(data){
  container.innerHTML = "";

  data.forEach((p,i)=>{
    const div = document.createElement('div');

    div.innerHTML = `
    <h3>${p.name}</h3>
    <p id="d-${i}">${p.desc.slice(0,20)}...</p>
    <button onclick="toggle(${i})">View</button>
    `;

    container.appendChild(div);
  });

  count.textContent = data.length+" projects";
}

render(filtered);

// Search
document.getElementById('search').oninput = (e)=>{
  let val = e.target.value.toLowerCase();
  filtered = projects.filter(p=>p.name.toLowerCase().includes(val));
  render(filtered);
};

// Sort
document.getElementById('sort').onchange = (e)=>{
  filtered.sort((a,b)=> e.target.value==="az" ?
    a.name.localeCompare(b.name) :
    b.name.localeCompare(a.name));
  render(filtered);
};

// Expand
function toggle(i){
  let el = document.getElementById(`d-${i}`);
  el.textContent = projects[i].desc;
}