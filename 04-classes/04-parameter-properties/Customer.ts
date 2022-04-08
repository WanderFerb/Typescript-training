class Customer {
    
    constructor(private _firstName: string, private _lastName: string){}
    
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
}
//using instance
let myCustomer = new Customer("Rakesh", "Dhiman");

console.log(myCustomer.firstName); 
console.log(myCustomer.lastName)