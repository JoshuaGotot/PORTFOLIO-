function displayPortfolio() {

  const profile = {
    name: "Gotot, Joshua Rey",
    bio: "Software engineer and entrepreneur with expertise in full-stack development.",
    projects: [
      "E-commerce Platform",
      "Task Management App", 
      "Portfolio Website"
    ]
  };

  try {

    const nameElement = document.getElementById("name");
    if (nameElement) {
      nameElement.textContent = profile.name;
    }


    const bioElement = document.getElementById("bio");
    if (bioElement && profile.bio) {
      bioElement.textContent = profile.bio;
    }


    const projectList = document.getElementById("projects-list");
    if (projectList && profile.projects) {
      projectList.innerHTML = ''; 
      profile.projects.forEach(project => {
        const li = document.createElement("li");
        li.textContent = project;
        projectList.appendChild(li);
      });
    }

  } catch (error) {
    console.error("Error loading profile:", error);
  }
}

function loadSkills() {
  try {
    const userSkills = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
    const skillsList = document.getElementById("skills-list");
    if (skillsList) {
      userSkills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
      });
    } else {
      console.warn("Element with ID 'skills-list' not found.");
    }
  } catch (error) {
    console.warn("Skills not found. Please define your skills.");
  }
}

function initializePortfolio() {
  document.addEventListener("DOMContentLoaded", () => {
    displayPortfolio();
    loadSkills();
  });
}


initializePortfolio();

console.log("Script loaded");