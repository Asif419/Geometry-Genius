document.getElementById('calulate-container').addEventListener('click', function (event) {
    //working on enabling input field
    const targetA = event.target;
    const lengthA = targetA.classList.length;
    let checkA = false;
    //check: the click on edit button or not
    for (let i = 0; i < lengthA; i++) {
        if (targetA.classList[i] == 'btn-edit-open') {
            checkA = true;
            break;
        }
    }
    //edit button clicked
    if (checkA == true) {
        //enabling input field after click on edit
        const inputFieldOne = targetA.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1];
        inputFieldOne.removeAttribute('disabled');
        const inputFieldTwo = targetA.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1];
        inputFieldTwo.removeAttribute('disabled');

        //making values innertext ?
        let valueOneInnerText = targetA.parentNode.childNodes[1];
        let valueTwoInnerText = targetA.parentNode.childNodes[3];
        valueOneInnerText.innerText = '?';
        valueTwoInnerText.innerText = '?';
        //making values innertext ? for rombus | as rombus has different html
        const checkRombusOrNot = targetA.parentNode.parentNode.childNodes[1].innerText;
        if(checkRombusOrNot == "Rhombus") {
            valueOneInnerText = targetA.parentNode.childNodes[2];
            valueTwoInnerText = targetA.parentNode.childNodes[6];
            valueOneInnerText.innerText = '?';
            valueTwoInnerText.innerText = '?';
        } 

        //making checkbox unchecked
        const checkbox = targetA.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].childNodes[1];
        checkbox.checked = false;
    }


    //working on input field disabled;
    const targetB = event.target;
    const lengthB = targetA.classList.length;
    let checkB = false;
    //check: the click on checkbox or not
    for (let i = 0; i < lengthB; i++) {
        if (targetB.classList[i] == 'checkbox') {
            checkB = true;
            break;
        }
    }
    
    //checkbox clicked
    if (checkB == true) {
        //tracing input field
        const inputFieldOne = targetB.parentNode.parentNode.childNodes[1].childNodes[1];
        const inputFieldTwo = targetB.parentNode.parentNode.childNodes[3].childNodes[1];


        //getting values from input field
        const inputFieldOneValue = getValuesFromElement(inputFieldOne);
        const inputFieldTwoValue = getValuesFromElement(inputFieldTwo);


        //tracing the place where given values will set
        let inputFieldOneSetValue = targetB.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[1];
        let inputFieldTwoSetValue = targetB.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[3];
        
        //as Rombus has different html structure
        if (targetB.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].innerText == 'Rhombus') {
            inputFieldOneSetValue = targetB.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[2];
            inputFieldTwoSetValue = targetB.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[6];

        }

        //checking given values in input field one
        if (inputFieldOneValue == 'NaN' || inputFieldOneValue <= 0) {
            //set given values as ?
            inputFieldOneSetValue.innerText = '?';
            makeCheckboxUncheckedAndSetNullValue(targetB, inputFieldOne);
        }
        //checking given values in input field two
        else if (inputFieldTwoValue == 'NaN' || inputFieldTwoValue <= 0) {
            //set given values as ?
            inputFieldTwoSetValue.innerText = '?';
            makeCheckboxUncheckedAndSetNullValue(targetB, inputFieldTwo);
        }
        else {
            //disabling input field if checkbox clicked
            inputFieldOne.setAttribute('disabled', '');
            inputFieldTwo.setAttribute('disabled', '');

            //set given values as calculated values or updated values
            inputFieldOneSetValue.innerText = inputFieldOneValue;
            inputFieldTwoSetValue.innerText = inputFieldTwoValue;
        }
    }
})