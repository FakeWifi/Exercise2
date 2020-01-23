/**
 *   @author Michael Allen
 *   @version 0.0.2
 *   @summary Code demonstration: Selection logic
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse, birthDay, birthYear;
let firstName, lastName, birthMonth, atFault, policyNumber, age, premiumMonth, premiumDay, premiumYear, totalBill;
let currentYear = 2020

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setFirstName();
		setLastName();
		setDateOfBirth();
		setPolicyNumber();
		setAtFault();
		setPremiumDueDate();
        setTotalBill();
        printTotalBill();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

function setFirstName() {
    firstName = PROMPT.question(`\nPlease enter your first name: `);
}

function setLastName() {
    lastName = PROMPT.question(`\nPlease enter your last name: `);
}

function setDateOfBirth() {
  birthMonth = PROMPT.question(`\nPlease enter the month you were born: `);
  birthDay = PROMPT.question(`\nPlease enter the day you were born: `);
  birthYear = PROMPT.question(`\nPlease the year you were born: `);
  age = currentYear - birthYear;
  
}

function setPolicyNumber() {
  policyNumber = PROMPT.question(`\nPlease enter your policy number: `);

}


function setAtFault() {
    atFault = PROMPT.question(`\nPlease state the number of at-fault accidents you have been in within the last 3 years: `);
    
}

function setPremiumDueDate() {
  premiumMonth = PROMPT.question(`\nPlease enter the month your premium is due: `);
  premiumDay = PROMPT.question(`\nPlease enter the day your premium is due: `);
  premiumYear = PROMPT.question(`\nPlease the year your premium is due: `);
}

function setTotalBill() {
    const BASEPRICE = 100;
    if (age > 0) {
        if (age > 15 && age < 30) {
            totalBill = 50 * atFault + BASEPRICE + 20;
        } else if (age >= 30 && age < 45) {
            totalBill = 50 * atFault + BASEPRICE + 10;
        } else if (age >= 45 && age < 59) {
            totalBill = 50 * atFault + BASEPRICE;
        } else {
            totalBill = 50 * atFault + BASEPRICE + 50;
        }
    }
}

function printTotalBill() {
    console.log(`\n\t${firstName} ${lastName}'s bill: \$${totalBill}. Policy number#: ${policyNumber} Date due: ${premiumMonth}/${premiumDay}/${premiumYear}`);
}

function printGoodbye() {
    console.log(`\n\tGoodbye ${firstName}.`);
}

