const projectTitleName = "projecttitle";
const projectDescription = "projectdescription";
const projectLink = "projectlink";
const projectStatus = "projectstatus";
const projectLanguages = "projectlanguages";
const projectFrameworks = "projectframeworks";


class ProjectElement extends HTMLElement {

    template = document.createElement("template");
    templateContent = `
    <link rel="stylesheet" href="./Elements/Project/styles.css">
    <a id="${projectLink}" class="round">
        <div class="wrapper">
            <div id=${projectTitleName} class ="title">Titel</div>
            <div id="${projectDescription}">Beschreibung</div>
            <div id="${projectLanguages}">Sprachen</div>
            <div id="${projectFrameworks}">Frameworks></div>
            <div id=${projectStatus}>Status</div>
        </div>
    </a>
    `;

    constructor() {
        super();
        this.template.innerHTML = this.templateContent;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(this.template.content.cloneNode(true));
        this.projectLinkElement = shadow.querySelector(`#${projectLink}`);
        this.projectDescriptionElement = shadow.querySelector(`#${projectDescription}`);
        this.projectStatusElement = shadow.querySelector(`#${projectStatus}`);
        this.projectTitleElement = shadow.querySelector(`#${projectTitleName}`);
        this.projectLanguagesElement = shadow.querySelector(`#${projectLanguages}`);
        this.projectFrameworksElement = shadow.querySelector(`#${projectFrameworks}`);
    }

    static get observedAttributes() {
        return [projectTitleName, projectDescription, projectLink, projectStatus, projectLanguages, projectFrameworks];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case projectTitleName:
                this.projectTitleElement.innerHTML = newValue;
                break;
            case projectLink:
                this.projectLinkElement.href = newValue;
                break;
            case projectDescription:
                this.projectDescriptionElement.innerHTML = newValue;
                break;
            case projectStatus:
                this.projectStatusElement.innerHTML = `Status: ${newValue}`;
                break;
            case projectLanguages:
                this.projectLanguagesElement.innerHTML = `Sprachen: ${newValue}`;
                break;
            case projectFrameworks:
                this.projectFrameworksElement.innerHTML = `Frameworks: ${newValue}`;
                break;
        }
    }
}

window.customElements.define("project-item", ProjectElement);