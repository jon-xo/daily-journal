import { saveEntry } from "../data/journal/JournalDataProvider.js";
import { EntryListComponent , printMoodSpan } from "../data/journal/JournalEntryList.js";

const mainContainer = document.getElementById("journal-main-container");

mainContainer.addEventListener("click", e => {
    if (e.target.id === 'journal-submit-btn') {
        const saveObject = {
            id: `${e.target.id}`,
            class: `${e.target.className}`,
            value: `${e.target.innerHTML}`
        }
        const specifiedMood = document.querySelector(`[id^="form-selected-mood--"]`).id.split('--');
        console.log(specifiedMood);
        const newJournalEntry = {
            date: `${document.getElementById("journalDate").value}`,
            concept: `${document.getElementById("conceptsCovered").value}`,
            entry: `${document.getElementById("journalEntry").value}`,
            moodId: Number.parseInt(specifiedMood[1])
        }

        debugger

       saveEntry(newJournalEntry).then(EntryListComponent);
    }
})

mainContainer.addEventListener("click", e => {
    if (e.target.id.startsWith("m--") ) {
        const listenerObject = {
            id: `${e.target.id}`,
            value: `${e.target.innerHTML}`
        }
        printMoodSpan(listenerObject.id)
    }
})
