//  Інтерфейс User

interface User {
    id: number;
    name: string;
    email:string;
}

// Partial<User>: всі поля необов'язкові

const partialUser: Partial<User> = {
    name: "Юліанна" ,
};
console.log("Partial<User>:", partialUser);

//Pick<User, 'id' | 'name'>: тфльки id i name

const pickedUser: Pick<User, 'id' | 'name'> = {
    id: 1,
    name: "Юля",
};
console.log("Pick, 'id' | 'name'>:", pickedUser);


//Record<string, User>: об'єкт користувачів за ключами

const userRecord: Record<string, User> = {
    user: { id:1, name: "Joo", email: "joo@example.com" },
    user: {id: 2, name: "Jin", email: "jin@example.com" },
};
console.log("Record<string, User>:", userRecord);

//Readonly<User>

const readonlyUser: Readonly<User> = {
    id: 10,
    name: "Jack",
    email: "jack@example",
};
console.log("Readonly<User>:", readonlyUser);


// Generic функції

function wrapInArray<T>(value: T): T[] {
    return [value];
}
console.log("wrapInArray:", wrapInArray("QA"));

//Злиття об'єктів

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
};
const merged = mergeObjects({name: "Юля"}, {age: 28});
console.log("mergeObjects:", merged);


// Interface з методами
interface Logger {
  log(message: string): void;
  error(message: string): void;
}

const consoleLogger: Logger = {
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
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 5, name: "Іван", email: "ivan@example.com" };
const email = getProperty(user, "email");
console.log("getProperty(user, 'email'):", email);