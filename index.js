// Code your solutions in this file
function countDown(num) {
  while (num > 0) {
    console.log(num);
    num--
  }
  console.log(num)
}

function writeCards(names, event) {
  let arr = []
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return arr
}