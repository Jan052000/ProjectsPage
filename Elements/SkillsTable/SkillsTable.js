class TableContent {
    constructor(columnHeaders, rows) {
        this.columnHeaders = columnHeaders;
        this.rows = rows;
    }
}

class SkillsTable extends HTMLElement {

    columnHeaderCount = -1;
    tableID = "contentTable";

    static contentProperty = "content";
    template = document.createElement("template");
    templateContent = `
    <link rel="stylesheet" href="./Elements/SkillsTable/styles.css">
    <link rel="stylesheet" href="global.css">
    <table id="${this.tableID}">
    </table>
    `;

    constructor() {
        super();
        this.template.innerHTML = this.templateContent;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(this.template.content.cloneNode(true));
        this.tableElement = shadow.querySelector(`#${this.tableID}`);
    }

    static get observedAttributes() {
        return [SkillsTable.contentProperty];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case SkillsTable.contentProperty:
                if (!(newValue instanceof Array))
                    newValue = JSON.parse(newValue);
                if (!newValue)
                    return;
                while (this.tableElement.lastElementChild) {
                    this.tableElement.removeChild(this.tableElement.lastElementChild);
                }
                this.tableElement.appendChild(this.GetTableHead(newValue.columnHeaders));
                this.tableElement.appendChild(this.GetTableBody(newValue.rows));
                break;
        }
    }

    GetTableHead(columnHeaders) {
        this.columnHeaderCount = columnHeaders.length;
        let head = document.createElement("thead");
        let inner = "";
        for (let i = 0; i < columnHeaders.length; i++) {
            inner += `<th scope="col">${columnHeaders[i]}</th>`;
        }
        head.innerHTML = `
        <thead>
            <tr>
            ${inner}
            </tr>
        </thead>
        `;
        return head;
    }

    GetTableBody(rows) {
        let body = document.createElement("tbody");
        for (let i = 0; i < rows.length; i++) {
            let rowElement = document.createElement("tr");
            if(rows[i].length !== this.columnHeaderCount)
                console.warn("Column header length and row length did not match, some items were omitted");
            for(let j = 0; j < this.columnHeaderCount; j++){
                let cell;
                if(j === 0)
                    cell = document.createElement("th");
                else
                    cell = document.createElement("td");
                cell.innerHTML = rows[i][j];
                rowElement.appendChild(cell);
            }
            body.appendChild(rowElement);
        }
        return body;
    }
}

customElements.define("skills-table", SkillsTable);