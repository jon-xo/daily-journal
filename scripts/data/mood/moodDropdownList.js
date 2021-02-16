export const buildMoodList = (allMoods) => {
    return `
    <div class="dropdown">
        <button class="btn btn-outline-dark dropdown-toggle mt-2" data-bs-toggle="dropdown" id="form-mood--button">
        Mood
        </button>
        <ul class="dropdown-menu dropdown-menu-dark">
            ${allMoods.map(
                (mood) => {
                    return `
                    <button type="button" class="btn btn-link dropdown-item mood-dropdown--list" id="m--${mood.id}">${mood.label}</button>
                    `
                }
            ).join("")
        }         
        </ul>
    </div>
    `
};

export const buildCurrentMood = (moodsArray) => {
    return `
    <ul class="list-group">
        <li class="list-group-item moodStyle text-center fw-bolder ${moodsArray.class}" id="form-selected-mood--${moodsArray.id}">${moodsArray.emoji} ${moodsArray.label}</li>
    </ul>
    `
};