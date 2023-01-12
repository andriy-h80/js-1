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
