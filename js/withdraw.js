

/* 
1. add event handeler  with the withdraw 
 */

document.getElementById('btn-withdraw').addEventListener('click', function(){
    console.log('withdraw button clickd');
    // step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousBalanceTotal);

    // step-4:

    const currentWithdrawTotal = previousBalanceTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    
    // step-5:
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const allPreviousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(allPreviousBalanceTotal);
    if(newWithdrawAmount > allPreviousBalanceTotal){
        alert('balance is low');
        return;
    }

    withdrawField.value = '';
    // step-6:
    const newBalanceTotal = newWithdrawAmount - allPreviousBalanceTotal;
    balanceTotalElement.innerText = newBalanceTotal;


    
})