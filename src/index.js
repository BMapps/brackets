module.exports=function check(str, bracketsConfig) {
    const LinkedList = require('./linked-list');

    let config=[bracketsConfig.length];
    for(let i=0;i<bracketsConfig.length;i++){
        config[i]=[2]
        config[i][0]=bracketsConfig[i][0];
        config[i][1]=bracketsConfig[i][1];
    }

    let stack= new LinkedList();
    for (let i=0;i<str.length;i++){

        if (str.charAt(i)==",") continue;

        if (find(str.charAt(i),config,0)===false){
            //it is only closing bracket 
            if (stack.length==0) return false;
            if (find(stack.tail(),config,0)===find(str.charAt(i),config,1)){
                stack.deleteAt(stack.length-1);
            } else return false;

        }else if (find(str.charAt(i),config,1)===false){
            //it is only opening bracket            
            stack.append(str.charAt(i));
                        
        }else {
            //it could be opening and closing bracket
            if (stack.tail()==str.charAt(i)){
                stack.deleteAt(stack.length-1)
            }else{
                stack.append(str.charAt(i));
            }       
        }    
    }
    return stack.length==0;      
}

function find(symbol, list, column){
    for (let i=0;i<list.length;i++){        
        if (list[i][column].charCodeAt(0)==symbol.charCodeAt(0)) return i;           
    }   
    return false;    
}



