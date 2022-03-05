const buttons = Array.from(document.getElementsByClassName("item"));
const display = document.getElementById("display");

for(var i = 0; i < buttons.length; i += 1){
    buttons[i].addEventListener("click", function (e) {
        try{
        if (e.target.value === "c")
            display.value = "";
        else if (e.target.value === "=")
            display.value = eval(display.value);
        else
            display.value += e.target.value;
        } catch(e){
            display.value = "";
        }
    });
}

function validateNumber(event) {
    var e = event || window.event;
    var key = e.keyCode || e.which;

    if (key >= 96 && key <= 111 && key != 110 || key == 8 || key == 13 || key == 37 || key == 39 || key == 46 || key == 190) 
    {
        if(key == 13)
        display.value = eval(display.value);
        else if(key == 46)
        display.value = ""; 
    }
    else {
        if (e.preventDefault) e.preventDefault();
    }
}
