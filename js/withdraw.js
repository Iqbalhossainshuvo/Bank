

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
    let previousBalanceTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousBalanceTotal);

  
    

    // step-4:

    const currentWithdrawTotal = previousBalanceTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    
    // step-5:
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal);
   
    

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Balance is Low');
        return;
    }

    // step-6:
    const newBalanceTotal = newWithdrawAmount - previousBalanceTotal;
    balanceTotalElement.innerText = newBalanceTotal;
    withdrawField.value = '';

    
})