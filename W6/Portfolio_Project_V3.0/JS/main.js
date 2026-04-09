// Scroll
window.addEventListener('scroll',()=>{
  let scroll = window.scrollY;
  let height = document.body.scrollHeight - window.innerHeight;

  document.getElementById('progress-bar').style.width =
    (scroll/height)*100 + "%";

  document.getElementById('top-btn').style.display =
    scroll>200 ? "block":"none";
});

// Top
document.getElementById('top-btn').onclick=()=>{
  window.scrollTo({top:0,behavior:'smooth'});
};

// Typing
let roles=["Developer","Designer"];
let i=0,j=0;

setInterval(()=>{
  let el=document.getElementById('typing');
  if(j<=roles[i].length){
    el.textContent=roles[i].slice(0,j++);
  }else{
    j=0;i=(i+1)%roles.length;
  }
},150);

// Greeting
let h=new Date().getHours();
document.getElementById('greeting').textContent =
  h<12?"Good Morning":h<18?"Good Afternoon":"Good Evening";

// Geo
navigator.geolocation.getCurrentPosition(pos=>{
  document.getElementById('location').textContent =
    `Lat:${pos.coords.latitude.toFixed(2)}`;
});