const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const customEvent = new CustomEvent();
const eventName = 'teste';

customEvent.on(eventName, (e) => {
  console.log('recive:', e);
});


/*
let count = 0;

setInterval(() => {
  customEvent.emit(eventName, 'event ' + count);  
  count++;
}, 1000);
*/

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
  console.log(value.toString().trim());
})