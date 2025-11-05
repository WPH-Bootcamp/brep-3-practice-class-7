const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const name = await ask("Nama anda ?");
  const umur = await ask("Umur anda ?");
  const pekerjaan = await ask("Pekerjaan anda ?");
}
