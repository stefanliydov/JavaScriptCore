class CheckingAccount{
    constructor(clientId, email, firstName, lastName ){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if(!(/^\d{6}$/g.test(value))){
            throw new TypeError("Client ID must be a 6-digit number");
        }
        else
        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if(!(/^[a-zA-Z0-9]+@[a-z.]+$/g.test(value))){
            throw new TypeError("Invalid e-mail");
        }
        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if(!(/^.{3,20}$/g.test(value))){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        else if(/[^a-zA-Z]/g.test(value)){
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {

        if(!(/^.{3,20}$/g.test(value))){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        else if(/[^a-zA-Z]/g.test(value)){
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = value;
    }

}
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')