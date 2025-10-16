// Завдання 1
function greet() {
    alert("Натисніть OK, щоб побачити привітання");
    document.getElementById("greetResult").innerHTML = "Hello, Погребний Руслан!";
}

// Завдання 2
function buttonChoice() {
    let result = confirm("Натисніть OK або Відміна");
    if(result) {
        document.getElementById("choiceResult").innerHTML = "Ви натиснули кнопку OK";
    } else {
        document.getElementById("choiceResult").innerHTML = "Ви натиснули кнопку Відміна";
    }
}

// Завдання 3
function multiplicationTable() {
    let num = 4; // замініть на останню цифру вашого номера
    let tableHTML = "<h3>Таблиця множення на " + num + "</h3><table>";
    for(let i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + num + " x " + i + "</td><td>" + (num * i) + "</td></tr>";
    }
    tableHTML += "</table>";
    document.getElementById("tableResult").innerHTML = tableHTML;
}
