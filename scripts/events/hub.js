import { saveEntry } from "../data/JournalDataProvider.js";
import { EntryListComponent } from "../data/JournalEntryList.js";

const mainContainer = document.getElementById("journal-main-container");

mainContainer.addEventListener("click", e => {
    if (e.target.id === 'journal-submit-btn') {
        console.log(e.target.className);
        console.log(document.getElementById("journalDate").value);
        debugger
       const newJournalEntry = {
            date: `${document.getElementById("journalDate").value}`,
            concept: `${document.getElementById("conceptsCovered").value}`,
            entry: `${document.getElementById("journalEntry").value}`,
            mood: `${document.getElementById("mood").value}`
       }
       saveEntry(newJournalEntry).then(EntryListComponent);
    }

})

