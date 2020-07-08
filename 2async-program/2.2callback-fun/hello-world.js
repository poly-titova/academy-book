const foo = () => {
  return 'Hello, world!';
}

// Вызываем функцию и выводим результат в консоль
console.log(foo()); // Hello, world

// Выводим функцию в консоль без вызова
console.log(foo); // ƒ () { return 'Hello, world!'; }


const runIt = (fn) => {
  return fn(); // Вызываем функцию, переданную в качестве параметра
}

console.log(runIt(foo)); // Hello, world