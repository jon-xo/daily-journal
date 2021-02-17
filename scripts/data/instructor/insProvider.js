let insArray = [];

export const getInstructors = () => {
    return fetch("http://10.0.10.20:8088/teachers")
    .then(ins => ins.json())
    .then(instructorsR => {
        insArray = instructorsR;
    })
};

export const useInstructors = () => insArray.slice();