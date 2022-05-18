$(document).ready(function () {
    localStorage.setItem("k", "k");

    //Check if userName already exists.
    $.validator.addMethod('validUserName', function (value, element) {
        isNull = localStorage.getItem(value);
        if (isNull == null) {
            return true;
        }
        else return false;
    });

    //Check if the password valid.
    $.validator.addMethod("validPassword", function (value, element) {
        return this.optional(element) || /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%&*]+$/i.test(value);
    });

    //Check if the fullName is from letters only. 
    $.validator.addMethod("onlyLetters", function (value, element) {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    });
});

$(function () {
    /* ---Validate the registerion form---  */
    $("#register").validate({
        rules: {
            //name=""
            userName: {
                required: true,
                validUserName: true
            },
            password: {
                required: true,
                minlength: 6,
                validPassword: true
            },
            fullName: {
                required: true,
                onlyLetters: true
            },
            email: {
                required: true,
                email: true
            },
            birthday: {
                required: true
            }
        },

        // error messages
        messages: {
            userName: {
                required: "please enter your user name",
                validUserName: "this user name is already exist."
            },
            password: {
                required: "please enter your password",
                minlength: "your password must contain at least 6 characters.",
                validPassword: "your passeord must contain letters and least on digit."
            },

            fullName: {
                required: "please enter your full name",
                onlyLetters: "your name must contain only letters."
            },
            email: {
                required: "please enter your email address",
                email: "you press invalid email address."
            },
            birthday: "please enter your birth date"
        },

        //Now we must make sure that the new user is entered into the system.
        submitHandler: function () {
            let new_userName = document.getElementById("userName").value;
            let new_pwd = document.getElementById("password").value;
            console.log(new_userName);
            localStorage.setItem(new_userName, new_pwd); //insert to localStorage the new key,val.
            console.log(localStorage);

            //After adding him to the system we will move to 'login-screen'.
            changeScreen('login-screen');
            document.getElementById("register").reset();
        }
    })
});






