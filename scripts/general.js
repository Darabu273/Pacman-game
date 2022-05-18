$(document).ready(function(){hideAllScreens();changeScreen("home-screen")})

function changeScreen(id){
    hideAllScreens();
    $('#'+id).show();
    $('#'+id).focus();
};

function hideAllScreens(){
    $(".screen").hide();
}

// function openAboutWindow(){
//     // about modal script
//     let aboutBtn = document.getElementById("About_btn");
//     let modal = document.getElementById("about-screen");
//     // let closeBtn = document.getElementById("about-close-btn");
//     modal.style.display = "block"
// }

