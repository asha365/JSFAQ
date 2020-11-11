// const normalPerson = {
//     firstName: 'rohim',
//     lastName: 'uddin',
//     salary: 20000,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount){
//         this.salary = this.salary - amount;
//         return this.salary;
//     }
// } 
// normalPerson.chargeBill(5000)
// console.log(normalPerson.salary);



const normalPerson = {
    firstName: 'rohim',
    lastName: 'uddin',
    salary: 20000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount,tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
normalPerson.chargeBill(150);
normalPerson.chargeBill(2000);
console.log(normalPerson.salary);

 const heroPerson = {
     firstName: 'Hero',
     lastName: 'Alom',
     salary: 25000
}
 const friendlyPerson = {
     firstName: 'asha',
     lastName: 'moni',
     salary: 25000
 }

 //bind
//normalPerson.chargeBill(); 
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);
// console.log(friendlyPerson.salary);

//call
// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);

//apply
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.salary);