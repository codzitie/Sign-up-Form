
button = document.querySelector('button');

button.addEventListener('click',()=>{
    const first_name = document.querySelector('#name');
    const first_password = document.querySelector('#password');
    const second_password = document.querySelector("#confirm-password");
    email = document.querySelector('#email');
    console.log(first_name.value.length)


    if ((first_name.value.length && email.value.length && first_password.value.length && second_password.value.length) ==  0){
        alert('FIll all mandatory feilds');
    }



    console.log(email.value);
    
    (email.value.includes('@') && email.value.includes('.com')) ? undefined : alert('enter a valid email'); 
    
    if (first_password.value != second_password.value){
        console.log("Make sure that last password should match with previously entered")
    }

    console.log(first_name.value,'your form is submitted successfully');
    

})
