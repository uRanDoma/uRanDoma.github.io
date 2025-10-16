// Завдання 1
function greetUser() {
    let userName = prompt("Введіть своє ім'я:");
    if(userName) {
        alert(`Hello, ${userName}! Welcome to JavaScript`);
        document.getElementById("greetResult").innerText = `Hello, ${userName}! Welcome to JavaScript`;
    }
}

// Завдання 2
function calculateBirthYear() {
    let age = parseInt(prompt("Введіть свій вік:"));
    if(!isNaN(age)) {
        let currentYear = new Date().getFullYear();
        let birthYear = currentYear - age;
        document.getElementById("birthYearResult").innerText = `You were born in ${birthYear}`;
    } else {
        document.getElementById("birthYearResult").innerText = "Будь ласка, введіть правильне число!";
    }
}

// Завдання 3
function fullName() {
    let firstName = prompt("Введіть своє ім'я:");
    let lastName = prompt("Введіть своє прізвище:");
    if(firstName && lastName) {
        // Через +
        console.log("Your full name is " + firstName + " " + lastName);
        // Через шаблонний рядок
        console.log(`Your full name is ${firstName} ${lastName}`);
        document.getElementById("fullNameResult").innerText = `Your full name is ${firstName} ${lastName}`;
    }
}
