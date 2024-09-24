import { buttonevent } from "./buttonfunction.js";
import {dayjs} from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
console.log(dayjs);

// Get the convert button and input/select elements
const button = document.querySelector('.Convert');
const temperatureInput = document.querySelector('.Temperature-input');
const givenUnit = document.querySelector('.given-value-unit');
const convertUnit = document.querySelector('.convert-value-unit');

// Function to validate inputs and enable/disable the button
function validateInputs() {
    const tempValue = temperatureInput.value.trim();
    const givenValue = givenUnit.value;
    const convertValue = convertUnit.value;

    // Disable the button if any of the fields is empty or invalid
    if (tempValue === "" || givenValue === "" || convertValue === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

// Add event listeners to input/select elements to check validity when user interacts with them
temperatureInput.addEventListener('input', validateInputs);
givenUnit.addEventListener('change', validateInputs);
convertUnit.addEventListener('change', validateInputs);

validateInputs();

button.addEventListener('click', () => {
    if (!button.disabled) {
        buttonevent(); // Call the button event if inputs are valid
    }else{
        console.log('fewafih');
    }
});
