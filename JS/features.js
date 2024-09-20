// show the cash out form and hide add money form

document.getElementById('cash-out-btn').addEventListener('click',function(){
    // show cash out form 
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide add money form
    document.getElementById('add-money-form').classList.add('hidden');

})

// show add  money form and hide cash out form
document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
    })
