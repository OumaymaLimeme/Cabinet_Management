

export default class Employee {
    id: number
    user_role: string

    constructor(
        id: number,
        user_role: string,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        mobile: string,
        sex: string,
        status: string
    ) {
        this.id = id
        this.user_role = user_role
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.password = password
        this.mobile = mobile
        this.sex = sex
        this.status = status
    }
    firstname: string
    lastname: string
    email: string
    password: string
    mobile: string
    sex: string
    status: string





}