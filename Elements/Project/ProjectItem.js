class ProjectElement extends HTMLElement {

    /**
     * Name of the attribute for the project title
     */
    static get projectTitleName() { return "projecttitle" };
    /**
     * Name of the attribute for the description
     */
    static get projectDescription() { return "projectdescription" };
    /**
     * Name of the attribute for the project link
     */
    static get projectLink() { return "projectlink" };
    /**
     * Name of the attribute for the availability
     */
    static get projectStatus() { return "projectstatus" };
    /**
     * Concatinated list of languages
     */
    static get projectLanguages() { return "projectlanguages" };
    /**
     * Concatinated list of frameworks
     */
    static get projectFrameworks() { return "projectframeworks" };

    template = document.createElement("template");
    templateContent = `
    <link rel="stylesheet" href="./Elements/Project/styles.css">
    <link rel="stylesheet" href="global.css">
    <a id="${ProjectElement.projectLink}">
        <div class="wrapper Rounded">
            <div id=${ProjectElement.projectTitleName} class ="title">Titel</div>
            <div id="${ProjectElement.projectDescription}">Beschreibung</div>
            <div id="${ProjectElement.projectLanguages}">Sprachen</div>
            <div id="${ProjectElement.projectFrameworks}">Frameworks></div>
            <div id=${ProjectElement.projectStatus}>Status</div>
        </div>
    </a>
    `;

    constructor() {
        super();
        this.template.innerHTML = this.templateContent;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(this.template.content.cloneNode(true));
        this.projectLinkElement = shadow.querySelector(`#${ProjectElement.projectLink}`);
        this.projectDescriptionElement = shadow.querySelector(`#${ProjectElement.projectDescription}`);
        this.projectStatusElement = shadow.querySelector(`#${ProjectElement.projectStatus}`);
        this.projectTitleElement = shadow.querySelector(`#${ProjectElement.projectTitleName}`);
        this.projectLanguagesElement = shadow.querySelector(`#${ProjectElement.projectLanguages}`);
        this.projectFrameworksElement = shadow.querySelector(`#${ProjectElement.projectFrameworks}`);
    }

    static get observedAttributes() {
        return [ProjectElement.projectTitleName, ProjectElement.projectDescription, ProjectElement.projectLink, ProjectElement.projectStatus, ProjectElement.projectLanguages, ProjectElement.projectFrameworks];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case ProjectElement.projectTitleName:
                this.projectTitleElement.innerHTML = newValue;
                break;
            case ProjectElement.projectLink:
                this.projectLinkElement.href = newValue;
                break;
            case ProjectElement.projectDescription:
                this.projectDescriptionElement.innerHTML = newValue;
                break;
            case ProjectElement.projectStatus:
                this.projectStatusElement.innerHTML = `Status: ${newValue}`;
                break;
            case ProjectElement.projectLanguages:
                this.projectLanguagesElement.innerHTML = `Sprachen: ${newValue}`;
                break;
            case ProjectElement.projectFrameworks:
                this.projectFrameworksElement.innerHTML = `Frameworks: ${newValue}`;
                break;
        }
    }
}

window.customElements.define("project-item", ProjectElement);