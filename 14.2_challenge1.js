const firstName = 'John';
const age = 35;
const hobbyName = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

function myHobby () {
  logTwice(`Hello, ${firstname} (${age}). I love ${hobbyName}!`)
}

myHobby();