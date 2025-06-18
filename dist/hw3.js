"use strict";
// Інтерфейси
//  Type Guards
function isNumber(x) {
    return typeof x === "number";
}
function isCar(x) {
    return x && typeof x.drive === "function";
}
function isSquare(x) {
    return x && typeof x.side === "number";
}
// Реальна функція з трьома guard
function printValue(x) {
    if (isNumber(x)) {
        console.log("Це число:", x.toFixed(2));
    }
    else if (isCar(x)) {
        console.log("Це автомобіль:");
        x.drive();
    }
    else if (isSquare(x)) {
        console.log("Це квадрат зі стороною:", x.side);
    }
    else {
        console.log("Невідомий тип:", x);
    }
}
//  Тестові виклики
printValue(3.1415);
const myCar = {
    drive() {
        console.log("Їду");
    },
};
printValue(myCar);
printValue({ side: 10 });
printValue("Щось інше");
//  JSON + Type Assertion (кастинг через as)
const raw = '{"id":42,"name":"Joo"}';
const obj = JSON.parse(raw);
const user = obj;
console.log("Користувач після JSON.parse:", user);
console.log(`ID: ${user.id}, Name: ${user.name}`);
