

export default class Prescription {
    id: number
    patient_id: string
    food_allergies: string
    tendency_bleed: string
    heart_disease: string
    high_blood_pressure: string
    diabetic: string
    surgery: string
    accident: string
    others: string
    family_medical_history: string
    current_medication: string
    female_pregnancy: string
    breast_feeding: string
    health_insurance: string
    low_income: string
    reference: string
    status: string

    constructor(
        id: number,
        patient_id: string,
        food_allergies: string,
        tendency_bleed: string,
        heart_disease: string,
        high_blood_pressure: string,
        diabetic: string,
        surgery: string,
        accident: string,
        others: string,
        family_medical_history: string,
        current_medication: string,
        female_pregnancy: string,
        breast_feeding: string,
        health_insurance: string,
        low_income: string,
        reference: string,
        status: string
    ) {
        this.id = id
        this.patient_id = patient_id
        this.food_allergies = food_allergies
        this.tendency_bleed = tendency_bleed
        this.heart_disease = heart_disease
        this.high_blood_pressure = high_blood_pressure
        this.diabetic = diabetic
        this.surgery = surgery
        this.accident = accident
        this.others = others
        this.family_medical_history = family_medical_history
        this.current_medication = current_medication
        this.female_pregnancy = female_pregnancy
        this.breast_feeding = breast_feeding
        this.health_insurance = health_insurance
        this.low_income = low_income
        this.reference = reference
        this.status = status
    }





}