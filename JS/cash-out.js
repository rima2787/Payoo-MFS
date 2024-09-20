// console.log('cash out success');


document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('cash out btn clicked');

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNum = document.getElementById('input-cash-out-pin').value;
    const pinNumber =parseFloat(pinNum);

    console.log(cashOut, pinNum);

    if(pinNum === '1234'){
       const balance = document.getElementById('account-balance').innerText;
       const balanceNumber = parseFloat(balance);

       const newBalance = balanceNumber - cashOutNumber;

       document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out');
    }

})