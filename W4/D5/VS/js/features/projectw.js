function renderProjects(){
    const projectsContainer = document.getElementById("projects-container");

    if(!projectsContainer){
        console.log("projects container not found");
        return;
    }

    projectsContainer.innerHTML = " ";

    projectsData.forEach(function(project){

        // Create outer card
        const card = document.createElement("div");
        card.className = "p-8 bg-white rounded-3xl shadow-lg";

        // Create project name
        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

        // Create category
        const projectCategory = document.createElement("p");
        projectCategory.className = "text-sm text-green-700 font-semibold mb-2";
        projectCategory.textContent = project.category;

        // Create description
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-4";
        projectDescription.textContent = project.description;

        // Create technologies
        const techContainer = document.createElement("div");
        techContainer.className = "flex flex-wrap gap-2 mb-4";

        project.technologies.forEach(function(tech){
            const techTag = document.createElement("span");
            techTag.className = "px-3 py-1 text-xs bg-gray-200 rounded-full";
            techTag.textContent = tech;

            techContainer.appendChild(techTag);
        });

        // Create links container
        const linksContainer = document.createElement("div");
        linksContainer.className = "flex gap-4";

        // Append elements to card
        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(techContainer);
     

        // Append card to container
        projectsContainer.appendChild(card);
    });

    console.log("projects rendered successfully");
}
renderProjects();