const readline = require('readline')
const rlInterface = readline.createInterface(process.stdin, process.stdout)

function ask(questionText) {
  return new Promise((resolve, reject) => { rlInterface.question(questionText, resolve) })
}


let rug = new Item(
  'rug',
  'a faded rug',
  'you lift the rug\nunderneath is a small key')

let clock = new Item(
  'clock',
  `the clock keeps ticking away\nthere is no way to open it`)

let smallKey = new Item(
  'smallkey',
  'a small key',
  'this looks like it would fit the lock on the desk...',
  true)

let largeKey = new Item(
  'largekey',
  'a large key',
  'this looks like it would fit the lock on the door...',
  true)

