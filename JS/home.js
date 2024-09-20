// console.log("Add money added")
// step-1: add an event handler to the add money btn
document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
        event.preventDefault();

        const addMoney = document.getElementById('input-add-money').value;
        console.log(addMoney);

        const pinNumber = document.getElementById('input-pin-num').value;
        console.log(pinNumber);

        
    })