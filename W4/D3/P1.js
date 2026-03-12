const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click",function(){
     // checks if domain already has a local stroage
    console.log("Local Stroage Chcek", typeof localStorage != "undefined"); 
    // checks if domain already has a session stroage
    console.log("Session Stroage Chcek", typeof sessionStorage != "undefined");
    console.log("localStorage object",localStorage);
    console.log("sessionStorage object",sessionStorage);
});