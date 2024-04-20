import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0035,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 350.00,
        "GBP": 1
    },
    "USD": {
        "PKR": 280.00,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Please, select your currency: "
    },
    {
        type: "list",
        name: "To",
        choices: ["PKR", "USD", "GBP"],
        message: "Please, select conversion currency: "
    },
    {
        type: "number",
        name: "Amount",
        message: "Please, enter your desired amount: "
    }
]);
const { From, To, Amount } = answer;
if (From && To && Amount) {
    let result = conversion[From][To] * Amount;
    console.log(`Your conversion from ${From} to ${To} is: ${result}.`);
}
else {
    console.log("Invalid Input!");
}
