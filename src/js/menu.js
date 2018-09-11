"use strict";
/* Variables */
var menuNav = document.getElementById("dropMenuNav");
var menuDiv = document.getElementById("dropdown");
/* Toggle click on menu */
function menu(){
    menuNav.classList.toggle("show");

};
/* Click outside menu, when menu is showing */
document.addEventListener('click', function(event){
    var clickInside = menuDiv.contains(event.target);
    if(!clickInside){
        if(menuNav.classList.contains('show')){
            menuNav.classList.remove('show');
        } 
    }
});