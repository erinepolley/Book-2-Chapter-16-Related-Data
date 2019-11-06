import html from "./employeeHtml.js"

const dom = {
    htmlString: "",
    domRenderer (entryObj) {
        let cardContainer = document.querySelector("#container")
        this.htmlString += html.employeesToHtml(entryObj)
        cardContainer.innerHTML = this.htmlString

    }
}

export default dom