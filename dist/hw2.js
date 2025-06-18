"use strict";
//  Інтерфейс User
// Partial<User>: всі поля необов'язкові
const partialUser = {
    name: "Юліанна",
};
console.log("Partial<User>:", partialUser);
//Pick<User, 'id' | 'name'>: тфльки id i name
const pickedUser = {
    id: 1,
    name: "Юля",
};
console.log("Pick, 'id' | 'name'>:", pickedUser);
//Record<string, User>: об'єкт користувачів за ключами
const userRecord = {
    user: { id: 1, name: "Joo", email: "joo@example.com" },
    user: { id: 2, name: "Jin", email: "jin@example.com" },
};
console.log("Record<string, User>:", userRecord);
//Readonly<User>
const readonlyUser = {
    id: 10,
    name: "Jack",
    email: "jack@example",
};
console.log("Readonly<User>:", readonlyUser);
// Generic функції
function wrapInArray(value) {
    return [value];
}
console.log("wrapInArray:", wrapInArray("QA"));
//Злиття об'єктів
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
;
const merged = mergeObjects({ name: "Юля" }, { age: 28 });
console.log("mergeObjects:", merged);
const consoleLogger = {
    log(message) {
        console.log("INFO:", message);
    },
    error(message) {
        console.error("ERROR:", message);
    },
};
consoleLogger.log("Система працює");
consoleLogger.error("Щось пішло не так");
// === Generic з extends
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 5, name: "Іван", email: "ivan@example.com" };
const email = getProperty(user, "email");
console.log("getProperty(user, 'email'):", email);
