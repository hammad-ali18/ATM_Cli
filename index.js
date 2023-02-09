import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'userID',
        message: "Kindly enter your Id: "
    },
    {
        type: 'number',
        name: 'userPIN',
        message: "Kindly enter your Pin: "
    },
    {
        type: 'list',
        name: 'accountType',
        choices: ['Current', 'Saving'],
        message: 'Select your Account Type: '
    },
    {
        type: 'list',
        name: 'transactionType',
        choices: ['Fast Cash', 'withdraw'],
        message: 'Select your Transaction Type: ',
        when(answer) {
            return answer.accountType;
        },
    },
    {
        type: 'list',
        name: 'amount',
        choices: [1000, 2000, 5000, 10000],
        message: 'Select your amount: ',
        when(answer) {
            return answer.transactionType == 'Fast Cash';
        },
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter your amount: ',
        when(answer) {
            return answer.transactionType == 'withdraw';
        }
    }
]);
if (answer.userID && answer.userPIN) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(balance);
    const EnteredAmount = answer.amount;
    if (balance > EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Amount withdrawn: " + EnteredAmount);
        console.log("Your remaining balance is :" + remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
