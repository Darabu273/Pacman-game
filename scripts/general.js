$(document).ready(function(){hideAllScreens();changeScreen("home-screen")})

function changeScreen(id){
    hideAllScreens();
    $('#'+id).show();
    $('#'+id).focus();
};

function hideAllScreens(){
    $(".screen").hide();
}