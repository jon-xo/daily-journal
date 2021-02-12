export const JournalForm = () => {
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
            <input class="field-span" list="mood-list" name="mood" id="mood">
            
            <datalist id="mood-list">
                <option value="Excited"></option>
                <option value="Neutral"></option>
                <option value="Overwhelmed"></option>
                <option value="Exhausted"></option>
                <option value="Curious"></option>
            </datalist>
        </fieldset>
        <fieldset class="field-span">
            <label for="journalEntry">Journal Entry</label>
            <input class="field-span" type="text" name="journalEntry" id="journalEntry">
        </fieldset>
        <input class="submit btn btn-outline-dark" id="journal-submit-btn" type="submit" value="Record New Note">
    </form>
    `
};