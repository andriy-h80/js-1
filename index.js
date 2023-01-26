//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"

// let answer = prompt("What is the official name of JavaScript?");
// answer = answer.toLowerCase();
// if (answer === "ECMAScript".toLowerCase()){
//     alert("True!");
// } else {
//     alert("Don't you know? ECMAScript!");
// }

// let answer = prompt("What is the official name of JavaScript?");
// answer = answer.toLowerCase();

// const message = answer === "ECMAScript".toLowerCase() ? "True!" : "Don't you know? ECMAScript!";
// alert(message);

//2. Напишіть програму, яка запитає у користувача через prompt "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

// const answer = prompt("Enter the number of minutes to format");
// const hours =  Math.floor(answer / 60);
// const minutes = answer % 60;
// console.log(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);

//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

// const min = 9;
// const max = 35;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

// const ask = prompt("Hello, please enter your login!");
// let message;
// if (ask === null) {
//   message = "Authorization has been cancelled";
// } else if (ask === "admin") {
//   const password = prompt("Please enter your password");

//   if (password === "adminPassword") {
//     message = "Hello!";
//   } else if (password === null) {
//     message = "Authorization has been cancelled";
//   } else {
//     message = "Goodbye!";
//   }
// } else {
//   message = "Goodbye!";
// }
// console.log(message);

// const ask = prompt("Hello, please enter your login!");
// let message;

// switch (ask) {
//   case null:
//     message = "Authorization has been cancelled";
//     break;

//   case "admin":
//     const password = prompt("Please enter your password");

//     switch (password) {
//       case "adminPassword":
//         message = "Hello!";
//         break;
//       case null:
//         message = "Authorization has been cancelled";
//         break;

//       default:
//         message = "Goodbye!";
//         break;
//     }
//     break;

//   default:
//     message = "Goodbye!";
//     break;
// }

// console.log(message);

//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:

// name: John
// "age: 20"
// "hobby: skydiving"
// "premium: false"
// "mood: happy"

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const keys of Object.keys(user)){
//     console.log(`${keys}: ${user[keys]} `)
// }

//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary,
// яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 100,
//   poly: 160,
//   ajax: 1470,
// };

// const getTotalSalary = function (salaries) {
//   const values = Object.values(salaries);
//   let result = 0;
//   for (const value of values) {
//     result += value;
//   }

//   return result;
// };

// console.log(getTotalSalary(salaries));

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

const stones = [
  { name: "emerald", price: 1300, quantity: 4 },
  { name: "diamond", price: 2700, quantity: 6 },
  { name: "sapphire", price: 400, quantity: 7 },
  { name: "rubble", price: 150, quantity: 100 },
];

let calcTotalPrice = function (stones, stonesName) {
  let totalSum = 0;

  for (const stone of stones) {
    if (stone.name === stonesName) {
      totalSum = stone.price * stone.quantity;
    }
  }

  return totalSum;
};

console.log(calcTotalPrice(stones, "qwe"));
