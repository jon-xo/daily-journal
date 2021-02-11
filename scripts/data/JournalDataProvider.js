/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 * 
 *      https://github.com/NewForce-at-Mountwest/client-side-mastery/blob/master/book-1-martins-aquarium/chapters/DAILY_JOURNAL_OBJECT_DOM.md
 */

// This is the original data.
let journal = [];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const useEntries = () => journal.slice();

export const getEntries = () => {
    return fetch("http://localhost:8088/journal")
    .then(r => r.json())
    .then(entriesReturned => {
        journal = entriesReturned;
    })
};

export const useJournalEntries = () => {
    const unsortedEntries = useEntries();
    const sortedByDate = unsortedEntries.sort(
        (currentEntry, nextEntry) => {
            // console.log(currentEntry, nextEntry);
            // console.log(Date.parse(currentEntry.date), Date.parse(nextEntry.date));
            return Date.parse(currentEntry.date) - Date.parse(nextEntry.date)}
    )
    return sortedByDate;
}
