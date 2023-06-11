//create an array with the animation elements
const spinnerArr = ['|', '/', '-', '\\', '|'];

const spinner = function() {
  let delay = 100;
  for (const char of spinnerArr) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);

    delay += 200;
  }
}

spinner();