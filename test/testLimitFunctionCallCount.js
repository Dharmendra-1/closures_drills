const limitFunctionCallCount = require('../limitFunctionCallCount');


const result = limitFunctionCallCount((n)=>{

    console.log('Hello', n);

}, 5);


result();
result();
result();
result();
result();
