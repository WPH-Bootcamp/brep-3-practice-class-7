function delayDecorator(fn, ms) {
  return function(...args) { // arguments dan params
    setTimeout(() => fn.apply(this, args), ms);
  };
}
// Decorator / Wrapper / Providers

function greet(name) {
  console.log(`Hello, ${name}`);
}

const delayedGreet = delayDecorator(greet, 1000);
delayedGreet("Alice");  // tampil setelah 1 detik