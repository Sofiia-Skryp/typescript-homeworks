"use strict";
// Змінні з різними типами
let username = "Юля";
let age = 28;
let isQA = true;
let anything = [1, "two", true];
let notSure = "Можливо текст";
// Функції з union типами
function printId(id) {
    console.log("ID:", id);
}
function processValue(value) {
    return `Оброблено: ${value}`;
}
// Викликаємо функції
printId("QA-007");
printId(123);
console.log(processValue("Юліанна"));
console.log(processValue(3.14));
