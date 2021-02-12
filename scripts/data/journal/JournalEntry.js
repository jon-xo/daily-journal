/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
import { entryDateConversion } from "./JournalDataProvider.js";

export const JournalEntryComponent = (entry) => {
    return `
    <div class="col col-lg-6">
        <div class="card mx-2 journal-entry-card">
            <section id="entry--${entry.id}" class="journalEntry card-body">
                <h3 class="card-title">${entryDateConversion(entry.date)}</h3>
                <h4 class="badge badge-pill bg-secondary text-light">${entry.concept}</h4>
                <h6>Mood: <small class="text-muted">${entry.mood.label}</small></h6>
                <h6 class="d-inline">Entry:</h6>
                <p class="d-inline">${entry.entry}</p>
            </section>
        </div>
    </div>
    `
};

export const JournalEntryHTML = (entry) => {
    return `
    <div class="col col-lg-6">
        <div class="card mx-2 journal-entry-card">
            <section id="entry--${entry.id}" class="journalEntry card-body">
                <h3 class="card-title">${entryDateConversion(entry.date)}</h3>
                <h4 class="badge badge-pill bg-success">${entry.concept}</h4>
                <h6>Mood: <small class="text-muted">${entry.mood.label}</small></h6>
                <h6 class="d-inline">Entry:</h6>
                <p class="d-inline">${entry.entry}</p>
            </section>
        </div>
    </div>
    `
};

export const JournalEntryAgile = (entry) => {
    return `
    <div class="col col-lg-6">
        <div class="card mx-2 journal-entry-card">
            <section id="entry--${entry.id}" class="journalEntry card-body">
                <h3 class="card-title">${entryDateConversion(entry.date)}</h3>
                <h4 class="badge badge-pill bg-info text-dark">${entry.concept}</h4>
                <h6>Mood: <small class="text-muted">${entry.mood.label}</small></h6>
                <h6 class="d-inline">Entry:</h6>
                <p class="d-inline">${entry.entry}</p>
            </section>
        </div>
    </div>
    `
};

export const JournalEntryJS = (entry) => {
    return `
    <div class="col col-lg-6">
        <div class="card mx-2 journal-entry-card">
            <section id="entry--${entry.id}" class="journalEntry card-body">
                <h3 class="card-title">${entryDateConversion(entry.date)}</h3>
                <h4 class="badge badge-pill bg-danger">${entry.concept}</h4>
                <h6>Mood: <small class="text-muted">${entry.mood.label}</small></h6>
                <h6 class="d-inline">Entry:</h6>
                <p class="d-inline">${entry.entry}</p>
            </section>
        </div>
    </div>
    `
};