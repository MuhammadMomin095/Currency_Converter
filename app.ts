#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD : 1,                                
    PKR : 277.98,
    AUD : 1.519,                                    
    NZD : 1.662,                   
    RUB : 91.57,                     
    INR : 83.31,   
    SAR : 3.750,                                         
    GBP : 0.7913,                               
    EUR : 0.9221,                 
    KWD : 0.3075
}



let userAnswer = await inquirer.prompt(
    [

        {
            name: "from",
            type: "list",
            message: "Enter From Currency",
            choices: ["USD", "PKR", "AUD", "NZD", "RUB", "INR", "SAR", "GBP", "EUR", "KWD"]
        },

        {
            name: "to",
            type: "list",
            message: "Enter From Currency",
            choices: ["USD", "PKR", "AUD", "NZD", "RUB", "INR", "SAR", "GBP", "EUR", "KWD"]
        },

        {
            name: "amount",
            type: "number",
            message: "Enter Your Amount"
        }
    ]
)

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);