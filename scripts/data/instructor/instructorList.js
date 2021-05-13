export const buildInstructorList = (allInstructors) => {
    return `
    <div class="dropdown">
    <button class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" id="form-mood--button">
        Instructors
    </button>
        <ul class="dropdown-menu dropdown-menu-dark">
            ${allInstructors.map(
                (instructor) => {               
                    return `
                    <button type="button" class="btn btn-link dropdown-item form-dropdown--list" id="ins--${instructor.id}">${instructor.title}</button>
                    `
                }
            ).join("")}
        </ul>
    </div>
    `
};

export const buildSelectedIns = (instructor) => {
    return `
    <ul class="list-group">
        <li class="list-group-item text-center journal-instructor ${instructor.class}" id="selectedIns--${instructor.id}"><img src="./images/${instructor.thumb}" alt="${instructor.title} avatar" class="me-1 rounded-1" srcset="">${instructor.title}</li>
    </ul>
    `
};