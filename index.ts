#! /usr/bin/env node


import inquirer from "inquirer";

let myBalance = 40000;
let mypin = 5544;


let pinNumber = await inquirer.prompt(
    [
        {
            name: "pin",
            message:  "Enter your Pin code: ",
            type: "number"
        }

    ]
);

if(pinNumber.pin === mypin){
    console.log("correct pin code!!!");


    let operationReply: any
    operationReply = await inquirer.prompt(
        [
           {
            name:  "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw","check balanc"]

           } 
        ]
    
    )
    console.log(operationReply);

    if(operationReply.operation === "withdraw") {
   
        
       
        let amountAnswer = await inquirer.prompt(
    
            [
                {

                    name: "amount",
                    message: "Enter your amount",
                    type:  "list",
                    choices: [5000,10000,20000,30000,40000,50000]

                }    
            ]    

        )    
    
        if( amountAnswer.amount > myBalance){
            console.log("You have insufficient Balance")
    
        }else{
            myBalance -= amountAnswer.amount;{

            console.log("your remaining balance is:" + myBalance)
                    
            }    
        }
       
    
    

    }else {
        console.log(`your balance is:" = ${myBalance}`)
    }
        

}else {
    console.log("Pin code is not correct ! " )
}   

    








