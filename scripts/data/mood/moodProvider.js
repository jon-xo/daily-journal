let moodArray = [];

export const useMoods = () => moodArray.slice();

export const getMoods = () => {
    return fetch("https://jonxo-daily-journal.herokuapp.com/moods")  
    .then(m => m.json())
    .then(moodsReturned => {
        moodArray = moodsReturned;
    })
};

