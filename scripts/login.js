//After we check if a password belongs to a user in the system - 'validInputPwd'
//We will move to game-screen. 
 function loginToSystem() {
    changeScreen('settings-screen');
    document.getElementById("login").reset();
 }



function verifyPassword() {
    let user = document.getElementById("userName-login").value;
    let pw = document.getElementById("password-login").value;

    if (user in localStorage){
        if (pw == localStorage.getItem(user)) {
            currPlayer = user; //user in the current game.
            loginToSystem();
            document.getElementById("message").innerHTML = "";
            return false;
        }else {
            document.getElementById("message").innerHTML = "At least one of your inputs is incorrect. Please try again!";
            return false; }
    }else {
        document.getElementById("message").innerHTML = "At least one of your inputs is incorrect. Please try again!";
        return false;
    }
}