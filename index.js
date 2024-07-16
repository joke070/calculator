

// MAKING THE CALCULATOR FUNCTION

const display = document.getElementById("display");

function handleButton(input){
    if(input === 'C') {
        display.value = ''; // Clear the display if 'C' button is pressed
    } else {
        display.value += input; // Append input to the display value
    }
}

function calculate(){
    try {
        display.value = eval(display.value);
        
    } catch (error) {
        display.value = "chisom made an error";
        
    }

}

