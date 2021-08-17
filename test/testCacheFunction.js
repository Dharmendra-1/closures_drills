const cacheFunction = require('../cacheFunction');


let result = cacheFunction((...args)=>console.log(args));


result('Hello', 'Hi');
result('Hello', 'Hi');
result('Hey', 'Hello', 'Hi');
result('Hey', 'Hello', 'Hi');
