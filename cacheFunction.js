const cacheFunction = (cb) =>{
    
    const obj = {};

    return innerFunction = (...args) =>{
    
          if(obj[args]){
              return obj[args];
          }else{
              obj[args] = args;

              cb(obj[args]);
          }
    }
}


module.exports = cacheFunction;