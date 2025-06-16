// Змінні з різними типами
let username: string = "Юля";
let age: number = 28;
let isQA: boolean = true;
let anything: any = [1, "two", true];
let notSure: unknown = "Можливо текст";

// Функції з union типами
function printId(id: string | number): void {
  console.log("ID:", id);
}

function processValue(value: string | number): string {
  return `Оброблено: ${value}`;
}

// Викликаємо функції
printId("QA-007");
printId(123);

console.log(processValue("Юліанна"));
console.log(processValue(3.14));