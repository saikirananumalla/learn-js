const cars = ['Saab', 'Volvo'];
cars[0] = 'Toyota';
cars.push('Audi');
console.log(cars);

var x = 5;
{
    let x = 6;
}
console.log(x);

const a = 10;
{
    const a = 2;
}
console.log(a);
console.log(2**4);

const person = {
    firstName : 'John',
    lastName : "Doe",
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());