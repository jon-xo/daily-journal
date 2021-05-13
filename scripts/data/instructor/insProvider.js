let insArray = [];

export const getInstructors = () => {
    return fetch("https://jonxo-daily-journal.herokuapp.com/teachers")
    .then(ins => ins.json())
    .then(instructorsR => {
        insArray = instructorsR;
    })
};

export const useInstructors = () => insArray.slice();