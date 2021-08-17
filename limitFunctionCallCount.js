const limitFunctionCallCount = (cb, n) =>{

        return inner = () => {

            if(n>0){
                n--;
                cb(n);
            }else{
                return null;
            }
        }

}


module.exports = limitFunctionCallCount;