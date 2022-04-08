class Customer {
    firstName : string;
    lastName : string;

    constructor(theFirstName : string, theLastName : string){
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }

}


//using instance
let myCustomer = new Customer("Vaibhav", "Dhiman");

// myCostumer.firstName = "Abhinav";
// myCostumer.lastName = "Dhiman";

console.log(myCustomer.firstName); 
console.log(myCustomer.lastName);