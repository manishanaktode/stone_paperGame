
function UserInput(uservalue){
    uservalue=uservalue.toLowerCase();
    if(uservalue ==='rock'|| uservalue ==='paper'|| uservalue ==='scissors'){
        console.log(`User Select: ${uservalue}`);
        return uservalue;
    }
    }
    //UserInput('rock');

    function ComputerInput(){
        let randomNumber=Math.floor(Math.random()*3);
        
        switch(randomNumber){
        
        case 0:
            console.log(`Computer Select:rock`);
            return 'rock';
            case 1:
                console.log(`Computer Select:paper`);
                return 'paper';
                case 2:
                    console.log(`Computer Select:scissors`);
                    return 'scissors';
             default:
                    break;
    }
    }
    //ComputerInput();
    function Winner(userchoice,computerchoice){
        if(userchoice==computerchoice){
        return 'match tied';
        }
        if(userchoice==='rock'){
            if(computerchoice==='paper'){
                return 'computer won';
            }
            else{
                return 'user won';
            }

        }
        if(userchoice==='paper'){
            if(computerchoice==='scissors'){
                return 'computer won';
            }
            else{
                return 'user won';
            }

        } 
        if(userchoice==='scissors'){
            if(computerchoice==='rock'){
                return 'computer won';
            }
            else{
                return 'user won';
            }

        } 
    }
    
console.log(Winner(UserInput('rock'),ComputerInput()));



