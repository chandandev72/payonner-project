 document.getElementById('deposit-button').addEventListener('click', function (){

// after click get the input from the input field 

 const depositInputField = document.getElementById('deposit-input');
 const depositInputText = depositInputField.value

 if(parseFloat(depositInputText)<=0) {
    return alert('please provide more then 0')
 }

// get the previous deposit and update deposit total 

 const previousdepositTotal = document.getElementById('deposit-total');
 const depositText = previousdepositTotal.innerText

const totaldepositText = parseFloat(depositInputText) + parseFloat(depositText)

 previousdepositTotal.innerText = totaldepositText;

//  Balance update 

const previousbalance = document.getElementById('balance-total');
const previousbalanceText = previousbalance.innerText;
const newbalance = parseFloat(previousbalanceText) + parseFloat(depositInputText);
previousbalance. innerText = newbalance 


//   clear the input filed

depositInputField.value = '';


 })
 
 document.getElementById('withdraw-button').addEventListener('click', function (){
 const withdrawInputField = document.getElementById('withdraw-input');
 const withdrawInputText = withdrawInputField.value;
 const withdrawInputNumber = parseFloat(withdrawInputText)

 if(withdrawInputNumber <=0){
    return alert('please provide more then 0')
 }
 
 const previousWithdrawTotal = document.getElementById('withdraw-total');
 const previousWithdrawTotalText = previousWithdrawTotal.innerText;
 const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalText);

 const newWithdrawTotal = withdrawInputNumber + previousWithdrawTotalNumber;
 previousWithdrawTotal.innerText = newWithdrawTotal

 const previousbalance = document.getElementById('balance-total');
const previousbalanceText = previousbalance.innerText;
const previousbalanceNumber = parseFloat(previousbalanceText)
const newbalance = previousbalanceNumber - withdrawInputNumber;
previousbalance.innerText = newbalance

 withdrawInputField.value = '';

 })