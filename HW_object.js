function Person(firstName, lastName, age, gender, hobby, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.hobby = hobby;
    this.id = id;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }

}
const mary = new Person('Mary', 'Black', 26, 'female', 'painting', 123456);
const nick = new Person('Nick', 'Black', 28, 'male', 'guitar', 123457);
const nancy = new Person('Nancy', 'Black', 5, 'female', 'violin', 123458);
const mike = new Person('Mike', 'Black', 7, 'male', 'football', 123459);

const martin = new Person('Martin', 'Green', 55, 'male', 'watching TV', 223456);
const nina = new Person('Nina', 'Green', 52, 'female', 'cooking', 223457);
const sam = new Person('Sam', 'Green', 30, 'male', 'box', 223458);
const will = new Person('Will', 'Green', 24, 'male', 'snowboarding', 223459);

const viktor = new Person('Viktor', 'Spring', 33, 'male', 'chess', 323456);
const dina = new Person('Dina', 'Spring', 40, 'female', 'dancing', 323457);
const samantha = new Person('Samantha', 'Spring', 22, 'female', 'dancing', 323458);
const sarah = new Person('Sarah', 'Spring', 13, 'female', 'reading', 323459);

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

printObject(mary);
printObject(nick);
printObject(nancy);
printObject(mike);
printObject(martin);
printObject(nina);
printObject(sam);
printObject(will);
printObject(samantha);
printObject(sarah);
printObject(viktor);
printObject(dina);


function printObject(obj) {
    for (let field in obj) {
        if(obj[field] === 'Black') {
            sum1 += +obj.age;
            console.log(obj.fullName())
        }
        if(obj[field] === 'Green') {
            sum2 += +obj.age;
            console.log(obj.fullName())
        }
        if(obj[field] === 'Spring') {
            sum3 += +obj.age;
            console.log(obj.fullName())
        }
    }
}

console.log(`Total Black's family age is ${sum1}.`);
console.log('--------------------------------------');
console.log(`Total Green's family age is ${sum2}.`);
console.log('--------------------------------------');
console.log(`Total Spring's family age is ${sum3}.`);

