// innerText & textContenet
// innerText: visible rendered text only 
// textContent: all text nodes regardless of CSS
// innerHTML: allows reading or writing HTML markup inside and element

const message = document.getElementById("message");
const textContent = document.getElementById("textContentBtn");
const Reset = document.getElementById("ResetBtn");

document.getElementById("message").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});
textContent.addEventListener("click",function(){
    message.textContent = "Updated using innerText";
});
Reset.addEventListener("click",function(){
    message.innerText = "<strong>Original Message";
});

const box = document.getElementById("box");
document.getElementById("innerHtmlBtn").addEventListener("click",function(){
    box.innerHTML = "<strong>Original</strong>Content";
});