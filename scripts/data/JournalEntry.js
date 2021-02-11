/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) => {
    return `
    <div class="col-lg col-md-12 card mx-2">
        <section id="entry--${entry.id}" class="journalEntry card-body">
            <h3 class="card-title">${entry.date}</h3>
            <h4 class="badge badge-pill bg-primary">${entry.concept}</h4>
            <h6>Mood: <small class="text-muted">${entry.mood}</small></h6>
            <h6 class="d-inline">Entry:</h6>
            <p class="d-inline">${entry.entry}</p>
        </section>
    </div>
    `
};

export const JournalEntryHTML = (entry) => {
    return `
    <div class="col-lg col-md-12 card mx-2">
        <section id="entry--${entry.id}" class="journalEntry card-body">
            <h3 class="card-title">${entry.date}</h3>
            <h4 class="badge badge-pill bg-success">${entry.concept}</h4>
            <h6>Mood: <small class="text-muted">${entry.mood}</small></h6>
            <h6 class="d-inline">Entry:</h6>
            <p class="d-inline">${entry.entry}</p>
        </section>
    </div>
    `
};

export const JournalEntryAgile = (entry) => {
    return `
    <div class="col-lg col-md-12 card mx-2">
        <section id="entry--${entry.id}" class="journalEntry card-body">
            <h3 class="card-title">${entry.date}</h3>
            <h4 class="badge badge-pill bg-info text-dark">${entry.concept}</h4>
            <h6>Mood: <small class="text-muted">${entry.mood}</small></h6>
            <h6 class="d-inline">Entry:</h6>
            <p class="d-inline">${entry.entry}</p>
        </section>
    </div>
    `
};

export const JournalEntryJS = (entry) => {
    return `
    <div class="col-lg col-md-12 card mx-2">
        <section id="entry--${entry.id}" class="journalEntry card-body">
            <h3 class="card-title">${entry.date}</h3>
            <h4 class="badge badge-pill bg-danger">${entry.concept}</h4>
            <h6>Mood: <small class="text-muted">${entry.mood}</small></h6>
            <h6 class="d-inline">Entry:</h6>
            <p class="d-inline">${entry.entry}</p>
        </section>
    </div>
    `
};