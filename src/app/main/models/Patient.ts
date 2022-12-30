

export default class Patient {
    id: number
    firstname: string

    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        phone: string,
        mobile: string,
        blood_group: string,
        sex: string,
        date_of_birth: string,
        address: string,
        status: string
    ) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.password = password
        this.phone = phone
        this.mobile = mobile
        this.blood_group = blood_group
        this.sex = sex
        this.date_of_birth = date_of_birth
        this.address = address
        this.status = status
    }
    lastname: string
    email: string
    password: string
    phone: string
    mobile: string
    blood_group: string
    sex: string
    date_of_birth: string
    address: string
    status: string




}