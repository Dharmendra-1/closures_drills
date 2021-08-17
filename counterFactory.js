
const counterFactory = (counter) =>{
      
     return counterObj = {
       
         increment(){
            return counter += 1;
         },

         decrement(){
           return counter -= 1;
         }
     }
}


module.exports = counterFactory;
