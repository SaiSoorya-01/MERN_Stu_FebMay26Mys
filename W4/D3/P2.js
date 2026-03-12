const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("UserName", "Rhaashee");
    localStorage.setItem("loggedIn", "true");
    console.log("Save theme: ",themeInput.value);
    output.textContent = "Successfully saved to localStorage";
    output.style.color = "green";
}); 
document.getElementById("readBtn").addEventListener("click",function(){
    const theme = localStorage.getItem("theme");
    output.textContent = "Theme is "+theme;
    output.style.color = "blue";
});
document.getElementById("removeBtn").addEventListener("click",function(){
    localStorage.removeItem("loggedIn");
    output.textContent = "Removed 'LoggedIn' ";
    output.style.color = "red";
});
document.getElementById("clearBtn").addEventListener("click",function(){
    localStorage.clear();
    output.textContent = "Cleared from localhost";
    output.style.color = "red";
});