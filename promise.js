const r1 = require('node:readline/promises').createInterface(process.stdin, process.stdout);

function getCounter(start=0) {
    let counter = start;
    return function () {
        counter++;
        return counter;
    }
}
const cnt1 = getCounter();

function guessNubmer() {
    const numberToGuess = Math.floor(Math.random() * 1000);
    console.log("Загаданное число:", numberToGuess);
    (async () => {
        while (true) {
        cmd = await r1.question("Введите число от 0 до 999: ")
        console.log(cmd);
        if (cmd === "q") {
            r1.close();
            break
        }
        else if (isNaN(cmd) || cmd <= 0 || cmd > 999) {
            console.log("Вы ввели не число от 0 до 999");
        }
        else if (+cmd === numberToGuess) {
            r1.close();
            console.log("Вы угадали!");
            console.log("Общее количество попыток:", cnt1());
            break
        }
        else if (+cmd > numberToGuess) {
            console.log("Вы не угадали! Загаданное число меньше введённого");
            console.log("Попытка №:", cnt1());
        }
        else if (+cmd < numberToGuess) {
            console.log("Вы не угадали! Загаданное число больше введённого");
            console.log("Попытка №:", cnt1())
        }
    }})()
}

guessNubmer();