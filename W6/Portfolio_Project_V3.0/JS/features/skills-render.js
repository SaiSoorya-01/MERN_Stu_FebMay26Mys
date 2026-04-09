const skillBox = document.getElementById('skills-container');

skills.forEach(s=>{
  let div = document.createElement('div');
  div.innerHTML = `<h3>${s.name}</h3><p>${s.type}</p>`;
  skillBox.appendChild(div);
});