// Code your solutions in this file
let messages = [];
function writeCards(array, name) {
  for (let i = 0; i < array.length; i++) {
    messages.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
  }
  return messages;
}

function countDown(number) {
  while (number + 1 > 0) {
    console.log(number--);
  }
}
