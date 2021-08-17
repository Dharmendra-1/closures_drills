const counterFactory = require('../counterFactory');


const result = counterFactory(1);


let incrementResult = result.increment()

console.log(incrementResult);


let decrementResult = result.decrement();

console.log(decrementResult)

