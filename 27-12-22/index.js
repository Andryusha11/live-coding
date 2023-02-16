/* eslint-disable */

const message = 'Test';
const weight = 55;

// global lex env
//{
//		'enviromentRecord': {
//			message: 'Text',
//			weight: 66,
//			run: (a + b) => a + b
//		},
//		outher: null,
//}

// run lex env
//{
//		'enviromentRecord': {
//
//		},
//		outher: global lex inv,
//}

// createMessanger lex env
//{
//		'enviromentRecord': {
//			....
//		},
//		outher: global lex inv,
//}

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

if (weight) {
  console.log('My weight is ' + weight);
}

const messanger = createMessenger();
run();
