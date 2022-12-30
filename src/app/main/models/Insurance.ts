

export default class Insurance {
    id: number
    insurance_name: string
    service_tax: string
    discount: string
    remark: string
    insurance_no: string
    insurance_code: string
    disease_name: string
    disease_charge: string
    hospital_rate: string
    insurance_rate: string


    constructor(
        id: number,
        insurance_name: string,
        service_tax: string,
        discount: string,
        remark: string,
        insurance_no: string,
        insurance_code: string,
        disease_name: string,
        disease_charge: string,
        hospital_rate: string,
        insurance_rate: string
    ) {
        this.id = id
        this.insurance_name = insurance_name
        this.service_tax = service_tax
        this.discount = discount
        this.remark = remark
        this.insurance_no = insurance_no
        this.insurance_code = insurance_code
        this.disease_name = disease_name
        this.disease_charge = disease_charge
        this.hospital_rate = hospital_rate
        this.insurance_rate = insurance_rate
    }







}