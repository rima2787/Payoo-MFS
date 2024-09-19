// form submit reloading the page

// set event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // prevent default behavior
    event.preventDefault();
    console.log('Clicked it');

    // get the phone number
    const phoneNum = document.getElementById('phone-number').value;
    console.log(phoneNum);
})
