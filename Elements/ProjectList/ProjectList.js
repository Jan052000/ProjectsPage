const projectList = "projectlist";
const projectArea = "projectArea";

class Project {
    constructor(projectTitle, projectDescription, projectLink, projectStatus, projectLanguages, projectFrameworks) {
        this.projectTitle = projectTitle;
        this.projectDescription = projectDescription;
        this.projectLink = projectLink;
        this.projectStatus = projectStatus;
        this.projectLanguages = projectLanguages;
        this.projectFrameworks = projectFrameworks;
    }
}

class ProjectList extends HTMLElement {

    template = document.createElement("template");
    templateContent = `
    <link rel="stylesheet" href="./Elements/ProjectList/styles.css">
    <link rel="stylesheet" href="global.css">
    <div id="${projectArea}">
    </div>
    `;

    constructor() {
        super();
        this.template.innerHTML = this.templateContent;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(this.template.content.cloneNode(true));
        this.projectAreaElement = shadow.querySelector(`#${projectArea}`);
    }

    static get observedAttributes() {
        return [projectList];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case projectList:
                if (!(newValue instanceof Array))
                    newValue = JSON.parse(newValue);
                if (!newValue)
                    return;
                while (this.projectAreaElement.lastElementChild) {
                    this.projectAreaElement.removeChild(this.projectAreaElement.lastElementChild);
                }
                for (let i = 0; i < newValue.length; i++) {
                    const newProject = new ProjectElement();
                    newProject.setAttribute(projectTitleName, newValue[i].projectTitle);
                    newProject.setAttribute(projectDescription, newValue[i].projectDescription);
                    newProject.setAttribute(projectLink, newValue[i].projectLink);
                    newProject.setAttribute(projectStatus, newValue[i].projectStatus);
                    newProject.setAttribute(projectLanguages, newValue[i].projectLanguages);
                    newProject.setAttribute(projectFrameworks, newValue[i].projectFrameworks);
                    this.projectAreaElement.appendChild(newProject);
                }
                break;
        }
    }
}

window.customElements.define("project-list", ProjectList);