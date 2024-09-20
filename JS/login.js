// form submit reloading the page

// set event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // prevent default behavior
    event.preventDefault();
    console.log('Clicked it');

    // get the phone number and pin num
    const phoneNum = document.getElementById('phone-number').value;
    const pinNum = document.getElementById('pin-number').value;
    // console.log(phoneNum,pinNum);

    // validation -->bad way
    if(phoneNum === '5' && pinNum === '1234'){
        console.log("You are logged in");
        window.location.href = 'Home.html';
    }
    else{
        alert("Wrong phn num or pin");
    }

    
})
