async function getWakatimeStats() {
  try {
    const response = await fetch("http://api:3000/portfolio/wakatime");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setStats(data);
  } catch (error) {
    console.error("Error fetching Wakatime stats:", error);
  }
}

function setStats(data) {
  const currentStats = document.querySelector(".wakatime-current-container");
  const weekStats = document.querySelector(".wakatime-week-container");

  document.querySelectorAll(".wakatime-loading").forEach(e => {
    e.style.display = "none";
  });

  if (data.current.data.projects.length === 0) {
    const noDataElement = document.createElement("div");
    noDataElement.classList.add("wakatime-no-data");
    noDataElement.innerHTML = `
      <h3>Nothing yet today</h3>
    `;
    currentStats.appendChild(noDataElement);
  } else {
    data.current.data.projects.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("wakatime-project");
      let projectName = project.name === "jesperson" ? "SCU Lab" : project.name;
      projectElement.innerHTML = `
        <h3>${projectName}</h3>
        <p>${project.text}</p>
      `;
      currentStats.appendChild(projectElement);
    });
  }

  const devOpsLanguages = ["Terraform", "Terraform Template", "YAML", "Docker", "Python", "Go", "Bash", "Powershell"];
  const filteredLanguages = data.week.data.languages
    .sort((a, b) => {
      const aIsDevOps = devOpsLanguages.includes(a.name);
      const bIsDevOps = devOpsLanguages.includes(b.name);
      if (aIsDevOps && !bIsDevOps) return -1;
      if (!aIsDevOps && bIsDevOps) return 1;
      return 0;
    })
    .slice(0, 10);

  filteredLanguages.forEach(language => {
    const languageElement = document.createElement("div");
    languageElement.classList.add("wakatime-language");
    languageElement.innerHTML = `
      <p>${language.name}</p>
      <p class="text">${language.text}</p>
    `;
    weekStats.appendChild(languageElement);
  });
}

getWakatimeStats();