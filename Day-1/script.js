var number = 0;
console.log(number)

let string = 'this is a string';
console.log(string)

const boolean = true;
console.log(boolean)

const object = {
    name: 'John',
    age: 30
};
const array = [
    'John',
    'Jane',
    'Bob'
];

console.log(typeof number, typeof string, typeof boolean, typeof object, typeof array);

let initial = 'array';
console.log(initial);
initial = 'object'
console.log(initial);

// const constant = 'array'
// constant = 'object'
// console.log(constant);


function logValueAndType(...arg) {
    for (let i = 0; i < arg.length; i++) {
        console.log(arg[i], typeof arg[i]);
    }
}
logValueAndType(1, 'string', true, {}, []);
