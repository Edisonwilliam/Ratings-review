let popup = document.getElementById("popup")
let selected = document.getElementsByClassName("selected")
let selectedrating = null;

function btn1(num){
    btn1 = num;
    document.querySelector(".selected").textContent = num;
}

function openpopup(){
    if(btn1){
        popup.classList.add("blockpopup")
    }
    else{
        alert("Please select a rating")
    }
}