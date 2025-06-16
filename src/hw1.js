// Змінні з різними типами
var username = "Юля";
var age = 28;
var isQA = true;
var anything = [1, "two", true];
var notSure = "Можливо текст";
// Функції з union типами
function printId(id) {
    console.log("ID:", id);
}
function processValue(value) {
    return "\u041E\u0431\u0440\u043E\u0431\u043B\u0435\u043D\u043E: ".concat(value);
}
// Викликаємо функції
printId("QA-007");
printId(123);
console.log(processValue("Юліанна"));
console.log(processValue(3.14));
