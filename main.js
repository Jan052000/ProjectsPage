//#region Fill project list
const projects = [
    new Project("BerichtManager", "Ein umfangreiches Programm zur Verwaltung von Wochenberichten in der Ausbildung.", "https://github.com/Jan052000/BerichtManager", "Public", "C#", ".NET, WindowsForms"),
    new Project("Kaffeemaschinen Planer", "Ein Programm zum automatischen Planen des Kaffeemaschinendienstes während meiner Ausbildung.", "https://github.com/Jan052000/KaffeeMaschinenPlaner", "Private", "C#", ".NET, WindowsForms"),
    new Project("Autoverwaltung", "Für die Einarbeitungsphase in C# am Anfang der Ausbildung", "https://github.com/Jan052000/Autoverwaltung", "Private", "C#, SQL", "WindowsForms"),
    new Project("Familienstammbaum", "Ebenfalls für die Einarbeitungsphase. Ein rekursiv angelegter Familienstammbaum generator", "https://github.com/Jan052000/FamilienStammbaum", "Private", "C#", ".NET, WindowsForms"),
    new Project("Blackjack", "Ein kleine Version von Blackjack als Übungsprojekt", "https://github.com/Jan052000/DelphiBlackjack", "Private", "Delphi", "Delphi Form Model"),
    new Project("Berufsschul Projekte", "Zwei kleine Programme zum Üben von SQL in der Berufsschule. Beinhaltet eine kurze eigene implementierung für das Erstellen von Datenbanken aus C# Objekten", "https://github.com/Jan052000/Berufsschule", "Public", "C#, SQL", "WindowsForms"),
    new Project("AngularTest", "Eine Spielesammlung für das Einfinden in Angular", "https://github.com/Jan052000/AngularTest", "Private", "TypeScrippt, JavaScript, HTML, CSS", "Angular"),
    new Project("AusbildungWeb", "Snake, Solitaire, Tetris und Minesweeper implementierungen", "https://github.com/Jan052000/AusbildungWeb", "Public", "TypeSctipr, JavaScript, HTML, CSS", ""),
    new Project("ApolloTestServer", "Ein Apollo GraphQL Server mit DND Zaubersprüchen als Daten", "https://github.com/Jan052000/ApolloTestServer", "Public", "TypeScript", "Node.js, ApolloGraphQL"),
    new Project("ApolloTestClient", "Eine Testseite, die den Apollo GraphQL Server aus einem anderen Projekt abfragt", "https://github.com/Jan052000/ApolloTestClient", "Public", "TypeScript, HTML, SCSS", "Angular, ApolloGraphQL")
];
const projectListElement = document.querySelector("project-list");
projectListElement.setAttribute(ProjectList.projectListAttributeName, JSON.stringify(projects));
//#endregion

//#region Assign handler for switching theme
const themeSwitch = document.querySelector("#themeSwitchCheck");
const themeSwitchButton = document.querySelector("#themeSwitch");
themeSwitchButton.addEventListener("click", (_) => { themeSwitch.checked = !themeSwitch.checked });
//#endregion

//#region Fill known language table
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
//#endregion

//#region Fill known frameworks table
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
//#endregion

//#region Fill other known technologies
const technologyTableElement = document.querySelector("#technologyTable");
const technologyContent = new TableContent(
    ["Unkategorisiert", "Einschätzung"],
    [
        ["Git", "Fortgeschritten"],
        ["HTML", "Grundkenntnisse"],
        ["CSS", "Grundkenntnisse"],
        ["GraphQL", "Grundkenntnisse"],
        ["SQL", "Grundkenntnisse"],
        ["Win32 API", "Grundkenntnisse"]
    ]
);
technologyTableElement.setAttribute(SkillsTable.contentProperty, JSON.stringify(technologyContent));
//#endregion