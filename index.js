// code your solution here
function saturdayFun(arg = "roller-skate"){
    return `This Saturday, I want to ${arg}!`
}

function mondayWork(arg = "go to the office"){

    return `This Monday, I will ${arg}.`

}

function wrapAdjective(arg){

    if (arg == "*"){

        return function(arg){

            return `You are *${arg}*!`
    
        }

    }else if(arg=="||"){
        return function(arg){

            return `You are ||${arg}||!`
    
        }
    }

    

    

    // if(arg === "*"){
    //     return "You are *a hard worker*!"
    // }else if (arg ==="||"){

    // }

}