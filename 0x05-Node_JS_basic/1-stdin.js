// 1-stdin.js
const msg1 = 'Welcome to Holberton School, what is your name?\n';
const msg2 = 'This important software is now closing\n';

process.stdout.write(msg1);

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write(msg2);

  process.exit();
});
