const jsonOutput = document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click",function(){
    const user = {id : 90, 
        name: "Rhaashee",
        role: "FullStack develepor",
        skills: ["HTML","CSS","JS"]
    };
    localStorage.setItem("userProfile",JSON.stringify(user));
    jsonOutput.textContent = "User object saved as string to localStroage";
});

document.getElementById("readBtn").addEventListener("click",function(){
    const user = localStorage.getItem("userProfile");
    console.log(JSON.parse(user));
    console.log(user);
    jsonOutput.textContent = "userProfile : "+user;
    jsonOutput.style.color = "blue";
});