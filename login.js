function eyeFunction(){
    var password1 = document.getElementById("login-password");
    var eyehide1 = document.getElementById("hide1");
    var eyehide2= document.getElementById("hide2");
    if(password1.type === 'password')
    {
        password1.type = "text";
        eyehide1.style.display = "none";
        eyehide2.style.display = "block";
    }
    else
    {
        password1.type = "password";
        eyehide1.style.display = "block";
        eyehide2.style.display = "none";
    }
}

function regEyeFunction(){

    var password1 = document.getElementById("register-password");
    var eyehide1 = document.getElementById("reg-hide1");
    var eyehide2= document.getElementById("reg-hide2");
    if(password1.type === 'password')
    {
        password1.type = "text";
        eyehide1.style.display = "none";
        eyehide2.style.display = "block";
    }
    else
    {
        password1.type = "password";
        eyehide1.style.display = "block";
        eyehide2.style.display = "none";
    }

}

function regConEyeFunction(){

    var password1 = document.getElementById("register-con-password");
    var eyehide1 = document.getElementById("reg-con-hide1");
    var eyehide2= document.getElementById("reg-con-hide2");
    if(password1.type === 'password')
    {
        password1.type = "text";
        eyehide1.style.display = "none";
        eyehide2.style.display = "block";
    }
    else
    {
        password1.type = "password";
        eyehide1.style.display = "block";
        eyehide2.style.display = "none";
    }

}


function showLogin(){

    var show_wrapper = document.querySelector(".wrapper")
    show_wrapper.style.display = "block";
    var show_wrapper1 = document.querySelector(".wrapper1")
    show_wrapper1.style.display = "none";

}

function showRegister(){

    var show_wrapper = document.querySelector(".wrapper")
    var show_wrapper1 = document.querySelector(".wrapper1")
    show_wrapper1.style.display = "block";
    show_wrapper.style.display = "none";
    
}

function closeLogfun(){

    var show_wrapper = document.querySelector(".wrapper")
    show_wrapper.style.display = "none";

}

function closeRegfun(){
    var show_wrapper1 = document.querySelector(".wrapper1")
    show_wrapper1.style.display = "none";
}

function backfun(){
    var show_wrapper1 = document.querySelector(".wrapper1")
    show_wrapper1.style.display = "none";
    var show_wrapper = document.querySelector(".wrapper")
    show_wrapper.style.display = "block";
}

function emailValidation(){

    var email = document.getElementById("gmail");
    var pattern1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.match(pattern1)) {
      email.setCustomValidity('');
    } else {
        email.setCustomValidity('Email does not match');
    }
    

}

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords does not match');
    }
  }


