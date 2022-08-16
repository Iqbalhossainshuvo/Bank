



// step-1: get deposit btn
document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('deposit btn work');
    // step-2: get deposit field
    const depositField = document.getElementById('deposit-field');
    // step-3: get deposit field Amount
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(typeof newDepositAmount);
    // step-4: get deposit set field Amount 
    const depositTotalAmount = document.getElementById('deposit-total');
    // step-5: get deposit set field Amount
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(depositTotalAmount);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // step-6: get deposit set field Amount 
    depositTotalAmount.innerText = currentDepositTotal;
    // step-6: get deposit set field Amount 
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(typeof previousBalanceTotal);
    // step-8: get deposit set field Amount 

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

        depositField.value = '';

})
