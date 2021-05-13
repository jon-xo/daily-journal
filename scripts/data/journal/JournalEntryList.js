/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent, JournalEntryHTML, JournalEntryAgile, JournalEntryJS } from "./JournalEntry.js";
import { JournalForm } from "./JournalForm.js";
import { getMoods, useMoods } from "../mood/moodProvider.js";
import { getInstructors , useInstructors } from "../instructor/insProvider.js";
import { buildCurrentMood } from "../mood/moodDropdownList.js";
import { buildSelectedIns } from "../instructor/instructorList.js";

// Reference to DOM element for positioning
const entryLog = document.querySelector('#entryLog');
const formCol = document.getElementById("journal-form--col")

let entries = '';
let returnedMoods = [];
let returnedIns = [];

export const printJournalForm = () => {
    
    getMoods().then(() => {
        returnedMoods = useMoods();
        getInstructors().then(() => {
            returnedIns = useInstructors();
            let formString = JournalForm(returnedMoods , returnedIns);
            formCol.innerHTML = formString;
        })
    })
};

export const printMoodSpan = (targetMood) => {
    const moodID = targetMood.split('--')
    // debugger

    for (const mood of returnedMoods) {
        // debugger

        if (parseInt(moodID[1]) === mood.id) {
            // debugger
            document.getElementById("current-mood--span").innerHTML = buildCurrentMood(mood)
            // debugger
        }
    }
    // if (targetMood.target.id.startsWith("btn-span--") ) {
    //     const moodID = e.target.id.split('--')

    //     const moodMatch = entries.find(mood => mood.id === targetMood.target.id)
        
        
    // } 

};

export const printInstructorSel = (targetInstructor) => {
    const intID = targetInstructor.split('--')
    const targetIntID = Number.parseInt(intID[1])

    for (const instructor of returnedIns) {
        if (targetIntID === instructor.id) {
            document.getElementById("current-instructor--span").innerHTML = buildSelectedIns(instructor)
        }
    }
};

export const EntryListComponent = () => {

    // Retreive a copy of the entry object from the data array.
    
    getEntries().then(() => {
        entries = useJournalEntries();
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
    })

};
