

export default class Appointement {
    id: number
    department_id: string
    patient_id: string
    doctor_id: string
    date: string
    problem: string
    status: string


    constructor(
        id: number,
        department_id: string,
        patient_id: string,
        doctor_id: string,
        date: string,
        problem: string,
        status: string
    ) {
        this.id = id
        this.department_id = department_id
        this.patient_id = patient_id
        this.doctor_id = doctor_id
        this.date = date
        this.problem = problem
        this.status = status
    }


}