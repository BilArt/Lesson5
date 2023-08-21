// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const infoStudent = {
//     name: "",
//     speciality: "",
//     logInfo: function(averageMark, missedLessons) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is : ${this.name}`);
//         console.log(`Speciality is : ${this.speciality}`);
//         console.log(`Average mark is : ${averageMark}`);
//         console.log(`Number of missed lessons - ${missedLessons}`);
//         console.groupEnd();
//     }
// }

// const student1 = {
//     name: "Anastasiia",
//     speciality: "teacher",
// }

// const student2 = {
//     name: "Petro",
//     speciality: "developer",
// }

// const student3 = {
//     name: "Konstantin",
//     speciality: "newsman",
// }

// infoStudent.logInfo.call(student1, 10, 0);

// infoStudent.logInfo.call(student2, 8, 2);

// const logInfoForStudent3 = infoStudent.logInfo.bind(student3);
// logInfoForStudent3(9, 1);



// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке при натисканні на кнопку css - має видати коротке визначення що це таке

// function html() {
//     console.log("HTML — це стандартизована мова розмітки документів для перегляду вебсторінок у браузері.");
// }

// function css() {
//     console.log("CSS — це спеціальна мова стилю сторінок[en], що використовується для опису їхнього зовнішнього вигляду.");
// }

// const htmlButton = document.getElementById('htmlButton');
// const cssButton = document.getElementById('cssButton');

// htmlButton.addEventListener('click', html);
// cssButton.addEventListener('click', css);


// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару функція має повертати назву товару і вартість

// function TotalCost(productName, priceForKg, quantity) {
//     const totalCost = priceForKg * quantity;
//     return `Product name: ${productName}, Costs: ${totalCost.toFixed(1)}`;
// }

// const product1 = TotalCost("Banana", 30, 4.5);
// console.log(product1);

// const product2 = TotalCost("Cherry", 58, 1.3);
// console.log(product2);

// const product3 = TotalCost("Orange", 89, 3.4);
// console.log(product3);