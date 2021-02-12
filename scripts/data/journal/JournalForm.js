import { buildMoodList } from "../mood/moodDropdownList.js";

export const JournalForm = (moodsArray) => {
    return `
    <header>
        <h2>Daily Journal</h2>
    </header>
    <form class="journal" action="">
        <fieldset class="field-span">
            <label for="journalDate">Date of entry</label>
            <input class="field-span" type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset class="field-span">
            <label for="conceptsCovered">Concepts covered</label>
            <input class="field-span" type="text" name="conceptsCovered" id="conceptsCovered">
        </fieldset>
        <fieldset class="field-span">
            <label for="mood">Today's Mood</label>
            ${buildMoodList(moodsArray)}
            <div class="col" id="current-mood--span">
            </div>
        </fieldset>
        <fieldset class="field-span mt-2">
            <label for="journalEntry">Journal Entry</label>
            <input class="field-span" type="text" name="journalEntry" id="journalEntry">
        </fieldset>
        <input class="submit btn btn-outline-dark" id="journal-submit-btn" type="submit" value="Record New Note">
    </form>
    `
};

