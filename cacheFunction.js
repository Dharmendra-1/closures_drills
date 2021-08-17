const obj = {};

const cacheFunction = (cb) =>{

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