const display = document.getElementById("display")

function appendtotopbar(input){
    display.textContent += input;
}
function cleartext(){
    display.textContent= ""
}
function calculate(){
    try{
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = error;
    }
}