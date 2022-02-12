export class User {

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}
