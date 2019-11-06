import dom from "./domRenderer.js"
import API from "./data.js"
console.log("Let's do this.")

API.getJournalEntries()
    .then(parsedEntries => {
        parsedEntries.forEach(entry=>{
            dom.domRenderer(entry)
    })
})

