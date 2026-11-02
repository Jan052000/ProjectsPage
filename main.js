const projects = [
    new Project("BerichtManager", "Ein umfangreiches Programm zur Verwaltung von Wochenberichten in der Ausbildung.", "https://github.com/Jan052000/BerichtManager", "Public", "C#", ".NET Core, WindowsForms"),
    new Project("Kaffeemaschinen Planer", "Ein Programm zum automatischen Planen des Kaffeemaschinendienstes während meiner Ausbildung.", "https://github.com/Jan052000/KaffeeMaschinenPlaner", "Private", "C#", ".NET Core, WindowsForms")
];
const projectListElement = document.querySelector("project-list");
projectListElement.setAttribute(ProjectList.projectListAttributeName, JSON.stringify(projects));

const themeSwitch = document.querySelector("#themeSwitchCheck");
const themeSwitchButton = document.querySelector("#themeSwitch");
themeSwitchButton.addEventListener("click", (_) => { themeSwitch.checked = !themeSwitch.checked });

const skillsTableElement = document.querySelector("#langTable");
const skillsContent = new TableContent(
    ["Sprache", "Einschätzung"],
    [
        ["C#", "Fortgeschritten"],
        ["Java", "Grundkenntnisse"],
        ["TypeScript", "Grundkenntnisse"],
        ["JavaScript", "Fortgeschritten"],
        ["Python", "Grundkenntnisse"],
        ["Delphi", "Grundkenntnisse"]
    ]);
skillsTableElement.setAttribute(SkillsTable.contentProperty, JSON.stringify(skillsContent));

const frameworkTableElement = document.querySelector("#frameworkTable");
const frameworkContent = new TableContent(
    ["Framework", "Einschätzung"],
    [
        ["Windows Forms", "Fortgeschritten"],
        ["Swing", "Grundkenntnisse"],
        ["AWT", "Grundkenntnisse"],
        ["Angular", "Grundkenntnisse"]
    ]
);
frameworkTableElement.setAttribute(SkillsTable.contentProperty, JSON.stringify(frameworkContent));