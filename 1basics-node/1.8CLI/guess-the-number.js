'use strict';

const readline = require(`readline`);
const chalk = require(`chalk`);

const welcomeText = `Привет, я Кекс. Мне нравится загадывать числа.
Всё честно: вы называете максимальное число, а я загадаю случайное
число в этом диапазоне. Попробуйте его угадать. Количество попыток
неограничено.`;

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const showWinMessage = (secretNumber) => {
  console.log(chalk.green(`
   Ура! Вы угадали число.
   Я действительно загадал ${secretNumber}.
  `));

  readLineInterface.close();
}

const checkAnswer = (secretNumber) => {
  readLineInterface.question(chalk.blue(`Ваш ответ: `), (inputNumber) => {
    const userAnswer = Number.parseInt(inputNumber);

    if (secretNumber === userAnswer) {
      return showWinMessage(secretNumber);
    }

    if (secretNumber > userAnswer) {
      console.log(chalk.blue('Больше'));
    }

    if (secretNumber < userAnswer) {
      console.log(chalk.blue('Меньше'));
    }

    console.log(chalk.red(`Промазал. Попробуй ещё.`));
    checkAnswer(secretNumber);
  });
}

const startGame = () => {
  console.log(chalk.green(welcomeText));

  readLineInterface.question(chalk.red(`Максимальное число: `), (maxNumber) => {
    const myNumber = getRandomNumber(0, Number.parseInt(maxNumber, 10));
    checkAnswer(myNumber);
  });
}

startGame();