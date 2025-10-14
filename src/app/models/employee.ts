
export interface Representative{
    id?: number;
    name: string;
    email?: string;
    date?: Date;
    image?: string;
}

// Class for Employee
export class Employee {
    constructor(
        public id: number,
        public date: Date,
        public status: 'Available' | 'Booked' ,
        public name: string,
        public firstName: string,
        public lastName: string,
        public email: string,
    ) { }

    // Computed property: full name
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
