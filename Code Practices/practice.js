// function sum(a,b) {
//     return a + b;
// }
// var a=15;

// console.log(sum(a,4));

// // ------------------------------------------------------------

// function product(pa,pb) {
//     return pa * pb;
// }

// let pa=20

// console.log(product(pa,4.6));

// // ------------------------------------------------------------

// var foo=6;
// foo=4;
// console.log(foo);

// // ------------------------------------------------------------

// // var obj1 = {};
// // const obj2 = {};

// // console.log(obj1 === obj2);
// // console.log(obj1 === obj1);

// // ------------------------------------------------------------

// // var obj1 = {};
// // var obj2 = {};

// // console.log(obj1 === obj2);
// // console.log(obj1 === obj1);

// // ------------------------------------------------------------

// var obj1 = {};
// let obj2 = {};

// console.log(obj1 === obj2);
// console.log(obj1 === obj1);

// ------------------------------------------------------------

// var x;

// console.log(x);

// ------------------------------------------------------------

// function add(a,b) {
//     console.log(a);
//     console.log(b)
// }

// add(5,6);

// ------------------------------------------------------------

// const obj = {};

// // console.log(obj.name);

// // ------------------------------------------------------------

// // function countLength(obj) {
// //     return Object.keys(obj).length;
// // }

// // console.log(countLength({a:5, b:10}));

// // ------------------------------------------------------------

// // function countLength(obj) {
// //     if (typeof obj === 'object') {
// //         return Object.keys(obj).length;
// //     } 
// // }

// // console.log(countLength({a:90, z:90}));
// // console.log(countLength({a:null}));

// // ------------------------------------------------------------

// // console.log( 1 + 2 === 3); 

// // ------------------------------------------------------------

// // console.log(Infinity / 1)

// // ------------------------------------------------------------

// function max (array) {
//     let currentMax = -Infinity;
//     for (const el of array) {
//         if (el > currentMax) {
//             currentMax = el;
//         }
//     }
//     return currentMax;
// }

// console.log(max(el))
// console.log(currentMax(1));

// ------------------------------------------------------------

// let a = Number('abc');

// console.log(a);

// console.log(a==a);

// ------------------------------------------------------------

// int a = 10;

// string b = '20'

// function x(int, string) {};

// console.log(x(b, a))


// console.log('Mihir'.length)

// console.log('3' === '3')
// console.log('3' == 3)
// console.log(undefined === null)

// ------------------------------------------------------------

// function C() {
//     this.a = 37;
// }

// console.log(C());
// console.log(new C());

// ------------------------------------------------------------

// function C2() {
//     this.a = 37;
//     return {a: 38};
// }

// o = new C2();

// console.log(o);

// ------------------------------------------------------------

function Person(name, age) {
    this.name = name;
    this.age = age;
    return {};
}

console.log(new Person('a','5'))