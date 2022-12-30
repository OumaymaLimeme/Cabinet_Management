

export default class Payment {
    id: number
    date: string
    account_id: string
    pay_to: string
    description: string
    amount: string
    status: string


    constructor(
        id: number,
        date: string,
        account_id: string,
        pay_to: string,
        description: string,
        amount: string,
        status: string
    ) {
        this.id = id
        this.date = date
        this.account_id = account_id
        this.pay_to = pay_to
        this.description = description
        this.amount = amount
        this.status = status
    }





}