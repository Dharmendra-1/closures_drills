const cacheFunction = (cb) =>{
    
    const obj = {};

    return innerFunction = (...args) =>{
    
          if(obj[args]){
              return obj[args];
          }else{
              obj[args] = args;

              cb(...args);
          }
    }
}


module.exports = cacheFunction;