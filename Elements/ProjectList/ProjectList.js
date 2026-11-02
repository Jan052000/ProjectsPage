/**
 * Class to order attributes of projects
 */
class Project {

    /**
     * Creates a new Project
     * @param {String} projectTitle Title of the Project
     * @param {String} projectDescription Short description
     * @param {String} projectLink Link to project
     * @param {String} projectStatus Availability of project
     * @param {String} projectLanguages Languages used in project
     * @param {String} projectFrameworks Frameworks used in project
     */
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

    /**
     * Name for the attribute of the list content
     */
    static get projectListAttributeName() { return "projectlist" };
    /**
     * Id for the wrapping div
     */
    projectArea = "projectArea";

    template = document.createElement("template");
    templateContent = `
    <link rel="stylesheet" href="./Elements/ProjectList/styles.css">
    <link rel="stylesheet" href="global.css">
    <div id="${this.projectArea}">
    </div>
    `;

    constructor() {
        super();
        this.template.innerHTML = this.templateContent;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(this.template.content.cloneNode(true));
        this.projectAreaElement = shadow.querySelector(`#${this.projectArea}`);
    }

    static get observedAttributes() {
        return [ProjectList.projectListAttributeName];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case ProjectList.projectListAttributeName:
                if (!(newValue instanceof Array))
                    newValue = JSON.parse(newValue);
                if (!newValue)
                    return;
                while (this.projectAreaElement.lastElementChild) {
                    this.projectAreaElement.removeChild(this.projectAreaElement.lastElementChild);
                }
                for (let i = 0; i < newValue.length; i++) {
                    const newProject = new ProjectElement();
                    newProject.setAttribute(ProjectElement.projectTitleName, newValue[i].projectTitle);
                    newProject.setAttribute(ProjectElement.projectDescription, newValue[i].projectDescription);
                    newProject.setAttribute(ProjectElement.projectLink, newValue[i].projectLink);
                    newProject.setAttribute(ProjectElement.projectStatus, newValue[i].projectStatus);
                    newProject.setAttribute(ProjectElement.projectLanguages, newValue[i].projectLanguages);
                    newProject.setAttribute(ProjectElement.projectFrameworks, newValue[i].projectFrameworks);
                    this.projectAreaElement.appendChild(newProject);
                }
                break;
        }
    }
}

window.customElements.define("project-list", ProjectList);