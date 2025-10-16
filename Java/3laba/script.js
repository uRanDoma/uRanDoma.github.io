// ------------------ Завдання 1 ------------------
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function showGreeting(fullName, age) {
    document.getElementById("greetingResult").innerText =
        `Hello, ${fullName}! You are ${age} years old.`;
}

function greetingProgram() {
    let firstName = prompt("Введіть своє ім'я:");
    let lastName = prompt("Введіть своє прізвище:");
    let age = prompt("Введіть свій вік:");
    if(firstName && lastName && age) {
        let fullName = getFullName(firstName, lastName);
        showGreeting(fullName, age);
    }
}

// ------------------ Завдання 2 ------------------
function getStudentInfo() {
    let name = prompt("Введіть ім'я студента:");
    let score = parseInt(prompt("Введіть бал студента (0-12):"));
    return { name, score };
}

function checkGrade(score) {
    if(score >= 10 && score <= 12) return "Excellent";
    if(score >= 7 && score <= 9) return "Good";
    if(score >= 4 && score <= 6) return "Satisfactory";
    return "Fail";
}

function showResult(name, grade) {
    document.getElementById("studentResult").innerText =
        `Student: ${name}\nGrade: ${grade}`;
}

function studentProgram() {
    let student = getStudentInfo();
    if(student.name && !isNaN(student.score)) {
        let grade = checkGrade(student.score);
        showResult(student.name, grade);
    } else {
        document.getElementById("studentResult").innerText = "Будь ласка, введіть правильні дані!";
    }
}

// ------------------ Завдання 3 ------------------
function calculateTip(amount, percent = 10) {
    return (amount * percent) / 100;
}

function showTipResult(amount, tip) {
    let total = amount + tip;
    document.getElementById("tipResult").innerText =
        `Bill: ${amount} грн\nTip (10%): ${tip} грн\nTotal: ${total} грн`;
}

function tipProgram() {
    let amount = parseFloat(prompt("Введіть суму рахунку (грн):"));
    if(!isNaN(amount)) {
        let tip = calculateTip(amount);
        showTipResult(amount, tip);
    } else {
        document.getElementById("tipResult").innerText = "Будь ласка, введіть правильну суму!";
    }
}
