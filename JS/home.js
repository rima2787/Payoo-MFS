// console.log("Add money added")
// step-1: add an event handler to the add money btn
document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
        event.preventDefault();
        //step-2:get add money and pin num
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        const pinNumberInput = document.getElementById('input-pin-num').value;
        console.log(pinNumberInput);

        // step-3:validation
        if(pinNumberInput === '1234'){
            console.log('adding money to your account');

            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);
            
            // add moneyInput with balance

            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);

            const newBalance = balanceNumber +addMoneyNumber;
            console.log(newBalance);
            // update the balance in the dom
            document.getElementById('account-balance').innerText = newBalance;
        
        }
        else{
            alert('Failed to add MOney! Please try again')
        }

        
    })