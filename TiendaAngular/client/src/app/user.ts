export class User {

    constructor(user = '', pass = '') {
        this.user = user;
        this.pass = pass;
    }
    user: string;
    pass: string;
}
