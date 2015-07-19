(function() {
    var common = require("../../common/common");
    
    // use balance in pennies to avoid floating point issues
    var usChangeMap = {
      hundreds: 10000,
      twenties: 2000,
      tens: 1000,
      fives: 500,
      ones: 100,
      quarters:25,
      dimes: 10,
      nickels: 5,
      pennies: 1
    };
    
    try {
        var testChangeContractViolation = 25.33;
        console.log("Making change for 25.33 pennies (expecting exception)");
        console.log(convertToMoney(testChangeContractViolation, usChangeMap));
    }
    catch(e) {
        console.log(e.message);
        console.log();
    }
    
    try {
        var testMoneyConversion = 257794;
      //console.log(convertToUSMoney(257794));
        var change = convertToMoney(testMoneyConversion, usChangeMap);
        console.log("Bills and coins to make " + testMoneyConversion + ": ");
        console.log(change);
        
        console.log();
        
        var testChangeMaker = {
            cost: 4.32,
            payment: 20
        }
        var change = makeUSChange(testChangeMaker.cost, testChangeMaker.payment);
        console.log("Cost: " + testChangeMaker.cost + 
                ", Payment: " + testChangeMaker.payment + 
                ", Change: ");
        console.log(change);
    }
    catch(e) {
        console.log("An unexpected exception occurred: " + e.message);
    }
    
    
    function makeUSChange(cost, payment) {
        if(cost > payment) {
            throw new common.InputException("You owe more money, punk!");
        }
        var balanceInPennies = Math.floor(100 * (payment - cost));
        return convertToMoney(balanceInPennies, usChangeMap);
    }
    
    /*
     * More elegant and flexible implementation: takes as input a mapping of bills/coins to their 
     * values. Can work with any mapping, but throws an exception if balance is greater than 0 at 
     * the end.
     * 
     * Gives optimal change if bills/coins are arranged in order of descending value.
     */
    function convertToMoney(balance, changeMap) {
        var change = {};
        for(var key in changeMap) {
            balance = getChangeAndReducedBalance(balance, change, key, changeMap[key]);
        }
        if(balance > 0) {
            throw new common.ContractViolationException("convertToMoney", 0, balance);
        }
            
        return change;
    }
    
    /* less elegant method: has hard-coded coin types and values, but may be easier to read 
     * because the logic is more explicit 
    */
    function convertToUSMoney(balanceInPennies) {
        var change = {
            hundreds: 0,
            twenties: 0,
            tens: 0,
            fives: 0,
            ones: 0,
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
        if(balanceInPennies > 100) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "hundreds", 10000);
            /* above function call replaces the following: 
            var numHundreds = Math.floor(balanceInPennies / 10000);
            change.hundreds += numHundreds;
            balanceInPennies -= 10000 * numHundreds;
            */
        }
        if(balanceInPennies > 20) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "twenties", 2000);
        }
        if(balanceInPennies > 10) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "tens", 1000);
        }
        if(balanceInPennies > 5) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "fives", 500);
        }
        if(balanceInPennies > 1) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "ones", 100);
        }
        if(balanceInPennies > .25) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "quarters", 25);
        }
        if(balanceInPennies > .1) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "dimes", 10);
        }
        if(balanceInPennies > .05) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "nickels", 5);
        }
        if(balanceInPennies > .01) {
            balanceInPennies = getChangeAndReducedBalance(balanceInPennies, change, "pennies", 1);
        }
        if(balance > 0) {
            throw new common.ContractViolationException("convertToUSMoney", 0, balance);
        }
        return change;
    }
    
    function getChangeAndReducedBalance(balance, change, billOrCoin, billOrCoinValue) {
        var numBillsOrCoins = Math.floor(balance / billOrCoinValue);
        change[billOrCoin] = numBillsOrCoins;
        return balance - (numBillsOrCoins * billOrCoinValue);
    }
})();