

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
