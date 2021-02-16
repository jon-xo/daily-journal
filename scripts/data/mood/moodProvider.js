let moodArray = [];

export const useMoods = () => moodArray.slice();

export const getMoods = () => {
    return fetch("http://10.0.10.20:8088/moods")  
    .then(m => m.json())
    .then(moodsReturned => {
        moodArray = moodsReturned;
    })
};

