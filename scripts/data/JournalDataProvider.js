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
const journal = [
    {
        id: 1,
        date: "01/05/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Neutral"
    },
    {
        id: 2,
        date: "01/08/2021",
        concept: "Agile",
        entry: "Provided insight in first retro after completing team HTML & CSS chanllenge.",
        mood: "Curious"
    },
    {
        id: 3,
        date: "01/11/2021",
        concept: "JavaScript",
        entry: "JavaScript function drills!",
        mood: "Exhausted"
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => {
            // console.log(currentEntry, nextEntry);
            // console.log(Date.parse(currentEntry.date), Date.parse(nextEntry.date));
            return Date.parse(currentEntry.date) - Date.parse(nextEntry.date)}
    )
    return sortedByDate;
}