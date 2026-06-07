// T1. Uso avanzado de funciones
// U2. Métodos reduce y forEach
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

class ClassroomReport {
    #studentList;

    constructor(studentList = []) {
        this.#studentList = studentList;
    }
    
    get studentList() {
        return this.#studentList;
    }

    set studentList(newList){
        this.#student = newList;
    }

    getStudentsNumber(excludeInactive = true) {
        const list = excludeInactive ? this.#studentList.filter(s => s.active) : this.#studentList;

        return list.reduce((count) => count + 1, 0);
    }

    averageGrade(excludeInactive = true) {
        const list = excludeInactive ? this.#studentList.filter(s => s.active) : this.#studentList;
        if (list.length === 0) return 0;

        const totalScore = list.reduce((sum, student) => sum + student.score, 0);
        return totalScore / list.length;
    }

    bestStudent(excludeInactive = true) {
        const list = excludeInactive ? this.#studentList.filter(s => s.active) : this.#studentList;
        if (list.length === 0) return null;

        let best = list[0];
        list.forEach(student => {
            if (student.score >= best.score) {
                best = student;
            }
        });
        return best;
    }
        worstStudent(excludeInactive = true) {
            const list = excludeInactive ? this.#studentList.filter(s => s.active) : this.#studentList;
            if (list.length === 0) return null;

            let worst = list[0];
            list.forEach(student => {
            if (student.score <= worst.score) {
                worst = student;
            }
        });
        return worst;
    }

    passedCount(excludeInactive = true) {
        const list = excludeInactive ? this.#studentList.filter(s => s.active) : this.#studentList;
        return list.reduce((count, s) => s.score >= 5 ? count + 1 : count, 0);
    }
    
    failedCount(excludeInactive = true) {
        const list = excludeInactive ? this.#studentList.filter(s => s.active) : this.#studentList;
        return list.reduce((count, s) => s.score < 5 ? count + 1 : count, 0);
    }
}

const alumnos = [
    {id: 1, active: true, score: 7},
    {id: 2, active: false, score: 9},
    {id: 3, active: true, score: 4}
];

const reporte = new ClassroomReport(alumnos);

console.log(reporte.getStudentsNumber(true));
console.log(reporte.passedCount(false));

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { ClassroomReport };
