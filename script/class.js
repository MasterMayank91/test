/*
*   Desgin By Mayank All Right Reserved
*   Website1 = "F.Society"
*   Script : Script/data
*/ 

try
{
    // var element = document.createElement('h1');

    // element.innerText = "LOADING";
    // element.style.width = 100%;
    // element.style.height = 100%;
    // element.style.background = "#000";
    // element.style.zIndex = 10;

    // document.body.appendChild(element);


    // document.body.onload = function()
    // {

    // }

    // Back button function to use back to home page

    let back_button = document.getElementById("btn2");

    back_button.onclick = function()
    {
        window.history.back();
    }

    document.querySelector("input[type='button']").onclick = () => window.history.back();
}
catch(error){}