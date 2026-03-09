// 
const input = document.getElementById("nameInput");
const display = document.getElementById("display");
input.addEventListener("keydown",function(event){
    console.log("key pressed:",event.key);
});
input.addEventListener("keydown", function(event) {
    display.innerHTML += "Key pressed: " + event.key + "<br>";
});