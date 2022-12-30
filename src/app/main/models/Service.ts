

export default class Service {
    id: number
    name: string
    description: string
    quantity: string
    amount: string
    status: string


    constructor(
        id: number,
        name: string,
        description: string,
        quantity: string,
        amount: string,
        status: string
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.quantity = quantity
        this.amount = amount
        this.status = status
    }


}