var box1;

window.onload = start;
function start() {
    box1 = document.getElementById("box1")
    var ans = confirm("Начинаем?");
    if (ans === true) {
        example1();
    } else {
        box1.innerHTML = "<h3 style='color: red'>Ну тогда пока</h3>";
    }
}

function example1() {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth();
    var y = today.getFullYear();
    var w = today.getDay();

    var s = "<span style='color: green'>Сегодня: </span>";
    
    s += "<span style='color: orange'>";
    s += (d<10) ? "0"+ d : d;
    s += ".";
    s += (d<10) ? "0"+ m : m;
    s += ".";
    s += y;
    s += "</span>";
    
    s += " - ";
    s += "<span style='color: blue'>"
    switch (w) {
        case 0:
            s+= "Воскресенье"
            break;
        case 1:
            s+= "Понедельник"
            break;
        case 2:
            s+= "Вторник"
            break;
        case 3:
            s+= "Среда"
            break;
        case 4:
            s+= "Четверг"
            break;
        case 5:
            s+= "Пятница"
            break;
        case 6:
            s+= "Субота"
            break;
    }
    s += "</span>"
    
    box1.innerHTML = s;
    
    var ans2 = confirm("Хотите фокус? Узнать время?")
    if (ans2 === true) {
        example2();
    } else {
        alert("Ну тогда с Вас 5 грн.");
    }
}

var h, m, s;
function example2() {
    h = m = s = 0;
    tick();
}

function displayTime() {
    var str = "<h1>";
    str += (h < 10) ? "0"+ h : h;
    str += ":";
    str += (m < 10) ? "0"+ m : m;
    str += ":";
    str += (s < 10) ? "0"+ s : s;
    str += "</h1>";
    box1.innerHTML = str;
}

function tick() {
    var time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    displayTime();
}