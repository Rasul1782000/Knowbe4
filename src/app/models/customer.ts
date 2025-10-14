
export interface Representative {
    id?: number;
    name: string;
    email?: string;
    phone?: string;
    date?: Date;
    imageUrl?: string;
}

// Class for Customer
export class Customer {
    constructor(
        public id: number,
        public date: Date,
        public name: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public address: string,
        public representative: Representative,
        public createdAt?: Date,
        public updatedAt?: Date
    ) { }

    // Computed property: full name
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
