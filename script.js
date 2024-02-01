


let h1Element = document.createElement('h1');

h1Element.innerHTML = "Mostafa Zamani";

h1Element.style.color = "gray";
h1Element.style.textAlign = "center";

document.body.appendChild(h1Element);
// ======================================

function Program() {

let Finput = document.createElement('input');
let Sinput = document.createElement('input');
let Button = document.createElement('button');

// =========================================================CSS

let ButtonStyling = Button.style;
let FinputStyling = Finput.style;
let SinputStyling = Sinput.style;

ButtonStyling.padding = "10px";
ButtonStyling.backgroundColor = "lightblue";
ButtonStyling.borderWidth = "3px";
ButtonStyling.marginTop = "10px";
ButtonStyling.cursor = "pointer";
Button.innerHTML = "Calculate";


FinputStyling.padding = "10px";
FinputStyling.backgroundColor = "lightgreen";
FinputStyling.borderWidth = "3px";
Finput.placeholder = "Enter the first number...";

SinputStyling.padding = "10px";
SinputStyling.backgroundColor = "Aqua";
SinputStyling.borderWidth = "3px";
SinputStyling.marginTop = "10px";
Sinput.placeholder = "Enter the second number...";

// =========================================================

document.body.appendChild(Finput);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(Sinput);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(Button);


Button.onclick = function(){

    let ValueofFinput = parseFloat(Finput.value);
    let ValueofSinput = parseFloat(Sinput.value);
    let paragraph = document.createElement('p');

    arrowFunction = () => { 

        try {
            if (isNaN(ValueofFinput) || isNaN(ValueofSinput)) {
                throw new Error("Not Valid");
            } else {
                SumofInputs = ValueofFinput + ValueofSinput;
                paragraph.innerHTML = `The Sum: ${SumofInputs}`;
            }
        } catch (error) {
            paragraph.innerHTML = error.message;
            if (isNaN(ValueofFinput)) {
                Finput.style.borderColor = "red";
            }
            if (isNaN(ValueofSinput)) {
                Sinput.style.borderColor = "red";
            }
        }
    }
    
    arrowFunction();
    document.body.appendChild(paragraph);
    
};
}
Program();