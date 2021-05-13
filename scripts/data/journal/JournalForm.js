import { buildInstructorList } from "../instructor/instructorList.js";
import { buildMoodList } from "../mood/moodDropdownList.js";

export const JournalForm = (moodsArray, insArray) => {
    return `
    <header>
        <h2>Daily Journal</h2>
    </header>
    <form class="journal" action="">
        <fieldset class="field-span mt-2">
            <label for="journalDate">Date of entry</label>
            <input class="field-span" type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset class="field-span mt-2">
            <label for="conceptsCovered">Concepts covered</label>
            <input class="field-span" type="text" name="conceptsCovered" id="conceptsCovered">
        </fieldset>
        <fieldset class="field-span mt-2">
            <label>Today's Mood</label>
            ${buildMoodList(moodsArray)}
            <div class="col" id="current-mood--span">
            </div>
        </fieldset>
        <fieldset class="field-span mt-2">
            <label>Instructor</label>
            ${buildInstructorList(insArray)}
            <div class="col" id="current-instructor--span">
            </div>
        </fieldset>
        <fieldset class="field-span mt-2">
            <label for="entryArea">Journal Entry</label>
            <textarea class="field-span" type="text" name="entryArea" id="journalEntry" rows="4"></textarea>
        </fieldset>
        <input class="submit btn btn-outline-dark" id="journal-submit-btn" type="submit" value="Record New Note">
    </form>
    `
};

