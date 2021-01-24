
 export function checkValues(param){

    param.forEach(e => {
      
     
        if(e != null && e != ""){
            debugger;
            return true;
        }

        else {
        return false;
        }
    });
}