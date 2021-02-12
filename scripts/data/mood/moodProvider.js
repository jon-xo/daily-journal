let moodArray = [];

export const useMoods = () => moodArray.slice();

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")  
    .then(m => m.json())
    .then(moodsReturned => {
        moodArray = moodsReturned;
    })
};

