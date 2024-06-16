#! /usr/bin/env node
import inquirer from "inquirer";
const currency = await inquirer.prompt([
    {
        name: "curr",
        type: "number",
        message: "Enter the amount of money you want to convert",
    },
    {
        name: "curr1",
        type: "list",
        message: "From: \n",
        choices: ["PKR", "USD", "EUR", "SAR", "INR"],
    },
    {
        name: "curr2",
        type: "list",
        message: "To: \n",
        choices: ["PKR", "USD", "EUR", "SAR", "INR"],
    },
]);
//FOR CONVERSION OF PKR...
if (currency.curr1 === "PKR" && currency.curr2 === "PKR") {
    console.log(`Your Amount in PKR is Rs. ${currency.curr}`);
}
else if (currency.curr1 === "PKR" && currency.curr2 === "USD") {
    console.log(`Your Amount in USD is $${currency.curr / 278}`);
}
else if (currency.curr1 === "PKR" && currency.curr2 === "EUR") {
    console.log(`Your Amount in EURO is ${currency.curr / 298}`);
}
else if (currency.curr1 === "PKR" && currency.curr2 === "SAR") {
    console.log(`Your Amount in SAR is ${currency.curr / 74.06}`);
}
else if (currency.curr1 === "PKR" && currency.curr2 === "INR") {
    console.log(`Your Amount in INR is Rs. ${currency.curr / 3.33}`);
}
else { }
;
//FOR CONVERSION OF USD...
if (currency.curr1 === "USD" && currency.curr2 === "PKR") {
    console.log(`Your Amount in PKR is Rs. ${currency.curr * 278}`);
}
else if (currency.curr1 === "USD" && currency.curr2 === "USD") {
    console.log(`Your Amount in USD is $${currency.curr}`);
}
else if (currency.curr1 === "USD" && currency.curr2 === "EUR") {
    console.log(`Your Amount in EURO is ${currency.curr * 0.93}`);
}
else if (currency.curr1 === "USD" && currency.curr2 === "SAR") {
    console.log(`Your Amount in SAR is ${currency.curr * 3.75}`);
}
else if (currency.curr1 === "USD" && currency.curr2 === "INR") {
    console.log(`Your Amount in INR is Rs. ${currency.curr * 84}`);
}
else { }
;
//FOR CONVERSION OF EURO...
if (currency.curr1 === "EUR" && currency.curr2 === "PKR") {
    console.log(`Your Amount in PKR is Rs. ${currency.curr * 298}`);
}
else if (currency.curr1 === "EUR" && currency.curr2 === "USD") {
    console.log(`Your Amount in USD is $${currency.curr * 1.07}`);
}
else if (currency.curr1 === "EUR" && currency.curr2 === "EUR") {
    console.log(`Your Amount in EURO is ${currency.curr}`);
}
else if (currency.curr1 === "EUR" && currency.curr2 === "SAR") {
    console.log(`Your Amount in SAR is ${currency.curr * 4.02}`);
}
else if (currency.curr1 === "EUR" && currency.curr2 === "INR") {
    console.log(`Your Amount in INR is Rs. ${currency.curr * 89.54}`);
}
else { }
;
//FOR CONVERSION OF SAR...
if (currency.curr1 === "SAR" && currency.curr2 === "PKR") {
    console.log(`Your Amount in PKR is Rs. ${currency.curr * 74.06}`);
}
else if (currency.curr1 === "SAR" && currency.curr2 === "USD") {
    console.log(`Your Amount in USD is $${currency.curr * 0.27}`);
}
else if (currency.curr1 === "SAR" && currency.curr2 === "EUR") {
    console.log(`Your Amount in EURO is ${currency.curr * 0.25}`);
}
else if (currency.curr1 === "SAR" && currency.curr2 === "SAR") {
    console.log(`Your Amount in SAR is ${currency.curr}`);
}
else if (currency.curr1 === "SAR" && currency.curr2 === "INR") {
    console.log(`Your Amount in INR is Rs. ${currency.curr * 22.27}`);
}
else { }
;
//FOR CONVERSION OF INR...
if (currency.curr1 === "INR" && currency.curr2 === "PKR") {
    console.log(`Your Amount in PKR is Rs. ${currency.curr * 3.33}`);
}
else if (currency.curr1 === "INR" && currency.curr2 === "USD") {
    console.log(`Your Amount in USD is $${currency.curr * 0.012}`);
}
else if (currency.curr1 === "INR" && currency.curr2 === "EUR") {
    console.log(`Your Amount in EURO is ${currency.curr * 0.011}`);
}
else if (currency.curr1 === "INR" && currency.curr2 === "SAR") {
    console.log(`Your Amount in SAR is ${currency.curr * 0.045}`);
}
else if (currency.curr1 === "INR" && currency.curr2 === "INR") {
    console.log(`Your Amount in INR is Rs. ${currency.curr}`);
}
else { }
;
