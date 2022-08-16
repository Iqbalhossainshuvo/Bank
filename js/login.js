

// LOGIN PAGE

     // step-1: submit btn work
const btnSubmit = document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit btn work')
    // step-2: find email
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
     console.log(email);
     // step-3: find password
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(password);
    // step-4: security password
    if(email === 'mdiqbalhossain203050@gmail.com' && password === 'abcd'){
        window.location.href = 'home.html';
        console.log('Valid User')
    }
    else{
        alert('Invalid User');
    }
    
});

//HOME PAGE

