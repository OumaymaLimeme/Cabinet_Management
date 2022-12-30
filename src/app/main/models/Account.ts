

export default class Account {
    id: number
    name: string
    type: string
    description: string
    status: string

    constructor(
        id: number,
        name: string,
        type: string,
        description: string,
        status: string
    ) {
        this.id = id
        this.name = name
        this.type = type
        this.description = description
        this.status = status
    }



}