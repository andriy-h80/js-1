



// const fruit = ["banana","orange"];
// console.log(fruit)
// greet()

// function greet ()
// {
//   console.log("Hi")
// }


// console.log(chekAge(18));

// function chekAge (age){
// let message;

// if (age >= 18){
//   return "совершенолетний"}

// else {return"не совершенолетний"}

// return message;
// }

// function min (a, b){
// return a < b ? a : b;}

// console.log(min(10, 15))
// console.log(min(101, 151))

// function getRect (dimensions){
// const arrey = dimensions.split(" ");

// return Number.parseInt(arrey[0]) * parseInt(arrey[1]);

// }

// console.log(getRect("0 1"));

// function calAverage (){
// let result = 0;
// for (const arg of arguments) {
//   result += arg;}

// return result/arguments.length;
// }
// console.log(calAverage(1, 2, 3, 4));

// function filterArray(numbers, value) {
//   // Change code below this line
// const filteredNumbers = [];

// for (const item of numbers){
//   const numbers = item;
    
//   if (number > value) {
//     filteredNumbers.push(number);}
// }


//       return filteredNumbers;
//  }

//  console.log(filterArray(1, 2));
  

// function getEvenNumbers(start, end) {
  
// const arrey = [];
// console.log(arrey)
//  for (let i = start; i <= end; i += 1){
//     if(i % 2 === 0) {arrey.push(i);}
 
                        
//                         }
//       return arrey;
//  }


  
//    console.log(getEvenNumbers(2, 11));

// function includes(array, value) {
//   // Change code below this line

//  return array / value ? true : false;
//   // Change code above this line
// }


// console.log([1, 2, 3, 4, 5], 17) ;

// Функция калькулятор

// let result;
// let number1 = +prompt("Введите 1 число:");
// let sign = +prompt("Введите знак арифметической операции: ");
// let number2 = +prompt("Введите 2 число:");


// switch (sign){
//   case "+":
//   result = add (number1, number2);  
//   break;

//   case "*":
//     result = multiplication (number1, number2); 
//     break;

//   case "-":
//     result = subtraction (number1, number2); 
//     break;

//     case "/":
//     result = division (number1, number2); 
//     break;
// default: 
// console.log("sign не знаком арифметическрй операции");

// if (result !== undefined)
// console.log ("Результат" `${number1} ${sign} ${number2} = ${result}`)
// ;

// }

// function add(a, b);
// {
//   return a + b;
// }

// function multiplication(a, b)
// {
//   return a * b;
// }

// function subtraction(a, b)
// {
//   return a - b;
// }

// function division(a, b)
// {
//   return a / b;
// }


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure", "historical prose", "adventure",],
//   isPublic: true,
//   rating: 8.38,
//   trackCount: 4,



  
//   const book = [
//  { name: "mango", online: false },
//  { name: "orange", online: true },
//  { name: "apple", online: false },
//  { name: "citrone", online: true },
//   ];


//ЗАДАЧА/ Ищем совпадение с именами name , если совпадает выводим
  // const findFriend = function (allBooks, bookname){
  //   for(const bok of book){
  //     console.log(bok);
      
  //     console.log(bok.name);

  //     if(bok.name === bookname){
  //       return "Found!";
  //     }
  //   }
  // return "Did not find!"
  // };

  // console.log(findFriend(book, "mang" ));



  // /ЗАДАЧА/ Ищем имена всех друзей

// const getAllFriens = function (allBooks, bookname)
// {
//    const names = [];
//   for(const bok of book){
//        console.log(bok.name);}
//       names.push(bok.name);
      
//       console.log(names);
//       }

//       console.log(getAllFriens(book));



// changeRating(newRating){
  
// this.rating = newRating;

// },
 
// adGenres(newGenres){
//   this.genres.push(newGenres);
// this.trackCount = this.genres.length;
// }

// };


// const findFriend = function (allBooks, name){
//   for(const book1 of book){
//     console.log(book1);

//   }

// }


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (let key of object){
// if (Object.hasOwnProperty(countProps)){
//   propCount++;}}
//   // Change code above this line
//   return propCount;
// }





// Подсчет колчества ключей

// const countProps = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure", "historical prose", "adventure",],
//   isPublic: true,
//   rating: 8.38,
//   trackCount: 4

  
// }





// let propCount = Object.keys(countProps).length
// console.log(propCount)



// const values = Object.values(countProps)



// for(const value of values){

//   propCount += value;
// }

// console.log(propCount)

// console.log(keys)

// console.log(values)

// console.log(totalValues);

// book.adGenres("новый жанр")
// console.log(book.genres)

// book.changeRating("новый рейтинг");
// console.log(book.trackCount);

// console.log(book.rating);
// console.log(book.title);
// const bookTitle = console.log(book.title);
// console.log(book.title); 
// 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); 
// ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice);
 // undefined

//  const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book["genres"];
// console.log(bookGenres); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(propKey);
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // "Bernard Cornwell"
// const newCharsct = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взято зі значення змінної propName
//   // [newCharsct]: "Генрі Сибола",
// };

// user[newCharsct] = "Генрі";
// console.log(user.name); // "Генрі Сибола"
// console.log(user);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   // console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4

// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8 ,9 ]];
// console.log(numbers);


// const number = [1, 2, 3].concat([4, 5, 6], [7, 8 ,9 ]);
// console.log(number);

// const a = {x : 1, z: 5 };
// const b = {x : 8, z: 4 };



// const c = {
// x : 8,
// ...a,

// ...b,
// z : 4,


// };
// console.log(c);

// // {x: 8, z: 4}

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   propCount = This.keys;
//   // Change code above this line
//   return propCount;
// }


// countProps({mail: 'poly@mail.com', isOnline: true, score: 500});
// console.log(propCount)

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (let key of keys){
// if (Object.hasOwnProperty(key)){
//   propCount++}}
//   // Change code above this line
//   return propCount;
// }

// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object){
// if (object.hasOwnProperty(key)){
//   propCount ++;}
//   // Change code above this line
//   return propCount;
// }
// } 

// countProps({ name: "Mango", age: 2 })

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key])}

// console.log(values);

// Сумма всех значений ключей с объекта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries);
 
 


//   for (const value of values){
  
//     totalSalary += value;
//     console.log(totalSalary);
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
 
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
  // Об'єкт книги
  // console.log(book);
  // Назва
  // console.log(book.title);
  // Автор
  // console.log(book.author);
  // Рейтинг
  // console.log(book.rating);
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (let i = 0; i < colors.length; i +=1)
// // {
// //   console.log(colors.hex);

// //   console.log(hexColors);
// // }

// // Перебрали обьект

// for (const color of colors){
//   console.log(color);
  
//   // Получили доступ к 
//   console.log(color.hex);
// hexColors.push(color.hex);
// console.log(hexColors);

//   console.log(color.rgb);
//   rgbColors.push(color.rgb);
//   console.log(rgbColors);

  // rgbColors.push(colors[color]);
  
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products){
// if (productName === product.name){
//  return (product.price); }


// }

// return null;
//   // Change code above this line
// }



// console.log(getProductPrice("Scanner"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
 
//   // Change code below this line
//   const allNames = [];
//   for (let i = 0; i < products.length; i += 1){
   
//    {
//       allNames.push(products.name)
//       console.log(products.keys)
//         }
//   }
//  console.log(products.name)

//   // Change code above this line
// }


// console.log(getAllPropValues("Radar"))


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (let i = 0; i < colors.length; i +=1)
// // {
// //   console.log(colors.hex);

// //   console.log(hexColors);
// // }

// Подсчет колчества ключей

// const countProps = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure", "historical prose", "adventure",],
//   isPublic: true,
//   rating: 8.38,
//   trackCount: 4

  
// }





// let propCount = Object.keys(countProps).length
// console.log(propCount)



// const values = Object.values(countProps)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const allNames = [];

// for(const product of products){
//   if(propName === product.name){
//     console.log(product.name)
//     allNames.push(product[propName])
//     console.log(product.name)
//   }
//   console.log((product[propName]))

//   // allNames.push(product.name)
  
//   // if else(propName === product.price)
//   // console.log(product.price)
  
// }

// // return allNames;
//   // Change code above this line
// }
// getAllPropValues("Radar");
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Change code below this line
//  const newArray = [];
//   for( const product of products) {
//     // console.log(product)
// if (product[propName])
//   {console.log([propName])
//     console.log(product)
//     console.log(product[propName])
//   newArray.push(product[propName])
// }
// }
//   // names.push(product.name);
// return newArray;
//   // Change code above this line
// }

// getAllPropValues("price")

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
  
// for(const product of products){
 
 
// if (product.name === productName) {
//   return product.price * product.quantity;
  
// }
  

// }
// return 0;

// // return total;
//   // Change code above this line
// }
// calculateTotalPrice("Rada")
// console.log(calculateTotalPrice("Rada"))

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }


// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }


// Change code below this line
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = (Math.max(...scores));
// console.log(Math.max(...scores));

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores)
// const bestScore = Math.max(...allScores);
// const worstScore = Math.max(...allScores);
// console.log(Math.max(...allScores));
// console.log(Math.min(...allScores));

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return {category, priority, ...data, completed};
//   return {...{category, priority, completed},...data }};
//   // Change code above this line

//   makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
//   console.log(makeTask)

// Change code below this line
// function add() {reduce(add)
//   // Change code above this line
//   return add;
// }
// add(15, 27)
// console.log(add)
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// let sum = 0;
// for(let i = 0; i < args.length; i++){
// sum += args[i]}
// // Change code above this line
// return sum;

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//    total += arg;
//   }
//   return total;
//  }



// function add(...args) {
//   console.log(args)
//  let total = 0;

//  for(const arg of args){
//   total +=arg;
//  }
// return total;
// }
// add(74, 11)
// console.log(add(74, 11));

// const bookShelf = {
//   books: ["Останнє королівство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["Останнє королівство"]
// bookShelf.addBook("Імла");
// bookShelf.addBook("Страж снів");
// console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
// bookShelf.removeBook("Імла");
// console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// for (let i = 0; i < this.potions.length; i += 1  ){
  
//   const item = this.potions[i];
  
//   if(potionName === item.name){
//     potions.splice (i, 1);
//   }
    
// }


//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath")
// console.log(atTheOldToad.removePotion("Dragon breath"))

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  this.potions.splice(this.potions.indexOf (oldName), 1, newName)
//  console.log(this.potions.indexOf (oldName), 1, newName)
// return this.potions;
//     // Change code above this line
//   },
// };



// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'))


// Після першого виклику методу `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`,
//  у властивості `potions` буде масив `['Speed potion', 'Polymorth', 'Stone skin']`

// Колбэк-функция


// Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(callback)
//   console.log(name)
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// registerGuest("Mango", greet);


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }



// console.log(makeMessage("Ultracheese", deliverPizza))
// console.log(makeMessage('Royal Grand', makePizza))

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);});



// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });



// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function callback(number){
//     totalPrice += number
//   });

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))




// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
  
//   numbers.forEach(function (number) {
   
//     if(number > value){
//     filteredNumbers.push(number)}
    
//     console.log(filteredNumbers);
//   });

 



//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   // console.log(filteredNumbers);

//   //   }
//   // }

 
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3)


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   console.log(firstArray)
//   console.log(secondArray)

// firstArray.forEach(function (secondArray, bum) {
//  if (secondArray.includes(firstArray))
// );
  
//   // // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
  

//   firstArray.forEach(function (newArray) {
    
//     if (secondArray.includes(newArray)) {
//       commonElements.push(newArray);}
//       console.log(commonElements);
//   })


//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// function changeEven(numbers, value) {
//   // Change code below this line
//    const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value)
      
//     }
    
//   }
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10))


// function changeEven (numbers, value) {
//   // Change code below this line



//   const newArray = [];

// numbers.forEach(number => {
//   // console.log(number)
//    if (number % 2 === 0) {
//     // console.log(number % 2 === 0)
//     newArray.push(number + value);
//     // console.log(number)
//    }
//    if (number % 2 !== 0) {
//     newArray.push(number)
//    }
// }) 
// return newArray;

//   };
  
//   // Change code above this line


//   console.log(changeEven([1, 2, 3, 4, 5], 10))

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres)

// // Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];


// const getUserNames = users.map(user => user.eyeColor);
// console.log(getUserNames)

//   // Change code above this line

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(numbers)
// console.log(oddNumbers)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating > 8.38);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks)
// console.log(booksByAuthor)



// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // const best = students.filter(student => student.score >= HIGH_SCORE);
// // console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// // const worst = students.filter(student => student.score < LOW_SCORE);
// // console.log(worst); // Масив з одним об'єктом Ajax

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
// console.log(({ score }))
// //  => score >= HIGH_SCORE
  
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {users.filter(({ age }) => age > minAge && score < maxAge);
 

// };
// Change code above this line

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];


// // Change code below this line
// const calculateTotalBalance = users => users.reduce((total, user) => {
//   console.log(total)
//   return total + user.balance
 
// }, 0);
// Change code above this line



// // Change code below this line
// const calculateTotalBalance = users.reduce((total, user) => {
//   console.log(total)
//   // console.log(user.balance)
//   return total + user.balance}, 0);
// // Change code above this line




// // Change code below this line
// const calculateTotalBalance = users => { users.reduce((total, user) => {
//   console.log(total)
//    return total + user.balance}, 0);
// };
// // Change code above this line






// const getUserWithEmail = (users, email) => {return users.find((user) => user.email === email)
   
// };

// console.log(getUserWithEmail(users, "moorehensley@indexia.com"))

// const getUsersWithAge = (users, minAge, maxAge) => { users.filter(user => user.age >= minAge && user.age <= user.maxAge )
  

 
  
// };

// // console.log(getUsersWithFriend)
// console.log(user.age)
// const getUsersWithFriend = (users, friendName) => { return users.filter(user =>
//    user.friends.includes(friendName) )
   
// };
// console.log(getUsersWithFriend(users, "Goldie Gentry"))

// const allFriends=users.flatmap(user=>user.friends);
// return allFriends.filter((user, index, array) => array.indexOf(user) === index);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder)

// console.log(inDescendingScoreOrder)

// console.log(inAlphabeticalOrder)


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];
// // // Change code below this line

// // const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor)=> firstAuthor.author.localeCompare(secondAuthor.author));

// // const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor)=> secondAuthor.author.localeCompare(firstAuthor.author));

// // console.log(sortedByAuthorName)


// // const students = [
// //   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
// //   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
// //   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
// //   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// // ];

// // const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// // console.log(sortedByAscendingScore)
// // const names = sortedByAscendingScore.map(student => student.name);

// // console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   {
// //     title: "The Dreams in the Witch House",
// //     author: "Howard Lovecraft",
// //     rating: 8.67,
// //   },
// // ];
// // const MIN_BOOK_RATING = 8;
// // // Change code below this line




// // const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));
// // console.log(names)

// // // .map(book => book.author).sort((a, b) => a.localeCompare(b));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// Change code below this line
// const getSortedFriends = users => {
//   return [...users].sort((firstUser,secondUser) => firstUser.name.localeCompare(secondUser.name)).filter((user, index, array) => array.indexOf(user) === index) 
   
// };
// const getSortedFriends = users => {
//   return [...users].flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index).sort((a, b) => a.localeCompare(b)  )
// }
 

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users].filter((user, gender) => user.gender === gender) 
//  };
  
//   // ((firstUser,secondUser) => firstUser.name.localeCompare(secondUser.name))}


// // const getSortedFriends = users => {
// //   return [...users].sort((firstUser,secondUser) => firstUser.name.localeCompare(secondUser.name)).filter((user, index, array) => array.indexOf(user) === index) 
   
// // };

// // const calculateTotalBalance = users => users.reduce((total, user) => {return total + user.balance}, 0);  


// // const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));




// console.log(getTotalBalanceByGender(users, gender))
// // Change code above this line


// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]



// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((lessFriends, moreFriends) => lessFriends.friends.length - moreFriends.friends.length)
   
// };
// // Change code above this line

// console.log(getNamesSortedByFriendCount(users))

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders,
//       this.map(order => `email: ${order.email} dish: ${order.dish}`),
//       this.join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// class Storage {
//   constructor(items){
//     this.items = items;
//   }
//   getItems(){return this.items}
//   addItem(newItem){this.items.concat(newItem)}
//   removeItem(itemToRemove) {
   
//     };
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor( initialValue ){this.value = initialValue}
//   getValue(){return this.value}
//   padEnd(str){this.value = this.value.concat(str)}
//   padEnd(str){this.value = str.concat(this.value)}
//   padBoth(str){this.value = str.concat(this.value).concat(str)}
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Storage {
//   // Change code below this line
// #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(...newItems) {
//     for(const newItem of newItems) {
//           this.#items.push(newItem);
//     }
//       }


//   // addItem(newItem) {
//   //   this.#items.push(newItem);
//   // }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid", "Vasya");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// class Car {
//   // Change code below this line
//   #price;
//   static #MAX_PRICE = 50000;
  
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//       if(newPrice < Car.#MAX_PRICE){ this.#price = newPrice;}
   
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 50000;
// console.log(audi.price); // 49000
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
// blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
    
//   }
//   blacklist(email) { this.blacklistedEmails.push(email)}
// isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }
//   }

//   // Change code above this line


// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true