

export default class Doctor {
    id: number
    firstname: string
    lastname: string
    email: string
    password: string
    designation: string
    address: string
    departement_id: string
    phone: string
    mobile: string
    specialist: string
    date_of_birth: string
    sex: string
    blood_group: string
    status: string
    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        designation: string,
        address: string,
        departement_id: string,
        phone: string,
        mobile: string,
        specialist: string,
        date_of_birth: string,
        sex: string,
        blood_group: string,
        status: string
    ) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.password = password
        this.designation = designation
        this.address = address
        this.departement_id = departement_id
        this.phone = phone
        this.mobile = mobile
        this.specialist = specialist
        this.date_of_birth = date_of_birth
        this.sex = sex
        this.blood_group = blood_group
        this.status = status
    }







}