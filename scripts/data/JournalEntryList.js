/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

import { useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent, JournalEntryHTML, JournalEntryAgile, JournalEntryJS } from "./JournalEntry.js";

// Reference to DOM element for positioning
const entryLog = document.querySelector('#entryLog');

export const EntryListComponent = () => {
    // Retreive a copy of the entry object from the data array.
    const entries = useJournalEntries();

    for (const entry of entries) {
        // Call component that returns html of a single journal entry.
        if (entry.concept === "HTML & CSS") {
            entryLog.innerHTML += JournalEntryHTML(entry);
        } else if (entry.concept === "Agile") {
            entryLog.innerHTML += JournalEntryAgile(entry);
        } else if (entry.concept === "JavaScript") {
            entryLog.innerHTML += JournalEntryJS(entry);
        } else {
            entryLog.innerHTML += JournalEntryComponent(entry);
        }
    }
};