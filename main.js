console.log("Test");
const projects = [
    new Project("BerichtManager", "Ein umfangreiches Programm zur Verwaltung von Wochenberichten in der Ausbildung.", "https://github.com/Jan052000/BerichtManager", "Public", "C#", ".NET Core, WindowsForms"),
    new Project("Kaffeemaschinen Planer", "Ein Programm zum automatischen Planen des Kaffeemaschinendienstes während meiner Ausbildung.", "https://github.com/Jan052000/KaffeeMaschinenPlaner", "Private", "C#", ".NET Core, WindowsForms")
];
const projectListElement = document.querySelector("project-list");
projectListElement.setAttribute("projectlist", JSON.stringify(projects));

const themeSwitch = document.querySelector("#themeSwitchCheck");
const themeSwitchButton = document.querySelector("#themeSwitch");

themeSwitchButton.addEventListener("click", (_) => { themeSwitch.checked = !themeSwitch.checked });