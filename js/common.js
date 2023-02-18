//used in index html page
function colorChanger(id) {
    const card = document.getElementById(id);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor;
    // card.style.opacity = '0.9';
}
//used in value-edit js file
function getValuesFromElement(inputField) {
    const inputFieldString = inputField.value;
    let inputFieldValue = parseFloat(inputFieldString);
    inputFieldValue = inputFieldValue.toFixed(2);
    return inputFieldValue;
}

function makeCheckboxUncheckedAndSetNullValue(target, inputField) {
    target.checked = false;
    inputField.value = '';
    alert('please do not give empty field or negative number');
}

function getValueFromElementById(elementId) {
    const elementString = document.getElementById(elementId);
    elementValue = parseFloat(elementString.innerText);
    return elementValue;
}

// used in calcualte js file
function getValueAndMultiplication(idOne, idTwo, idThree) {
    const valueOne = getValueFromElementById(idOne);
    const valueTwo = getValueFromElementById(idTwo);
    const btnCalculate = document.getElementById(idThree);
    
    const result = calculationButtonAbleOrDisabled(valueOne, valueTwo, btnCalculate);
    return result;
}

function makeCheckboxUncheckedandInputValuesEmpty(id) {
    const elementString = document.getElementById(id);
    const checkbox = elementString.parentNode.parentNode.childNodes[5].lastChild.previousSibling.childNodes[1];
    checkbox.checked = false;
    //making inbox field empty
    inputFieldOne = elementString.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1];
    inputFieldTwo = elementString.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1];
    
    //if both filed has number than replace with '' 
    if (inputFieldOne.value !== '' && inputFieldTwo.value !== '') {
        inputFieldOne.value = '';
        inputFieldTwo.value = '';
    }
}

function makeDivForAreaCalculation(numberOfAreaCalculation, areaProperty, area) {
    //set this value for show on web
    const areaCalculationResults = document.getElementById('area-calculation-results');

    const newDiv = document.createElement('div');
    newDiv.classList.add('area-calculation-result', 'flex', 'justify-between', 'items-center');
    areaCalculationResults.appendChild(newDiv);

    const newP = document.createElement('p');
    newP.innerText = `${numberOfAreaCalculation}. ${areaProperty}`
    newDiv.appendChild(newP);

    const newP2 = document.createElement('p');
    newP2.classList.add('flex-grow', 'text-center');
    newDiv.appendChild(newP2);

    const newSpan = document.createElement('span');
    newSpan.innerText = `${area}`;
    newP2.appendChild(newSpan);

    const newSpan2 = document.createElement('span');
    newP2.appendChild(newSpan2);

    const newSpan3 = document.createElement('span');
    newSpan3.innerText = ' cm';
    newSpan2.appendChild(newSpan3);

    const newSup = document.createElement('sup');
    newSup.innerText = '2';
    newSpan2.appendChild(newSup);

    const newButton = document.createElement('button');
    newButton.classList.add('btn-conversion', 'bg-blue-700', 'hover:bg-blue-500', 'text-white', 'p-2', 'rounded');
    newButton.innerHTML = `
        Convert to m<sup>2</sup></button>
        `
    newDiv.appendChild(newButton);
}

function convertCMToM(btnConversionClass, areaInCM) {
    btnConversionClass.childNodes[2].addEventListener('click', function (event) {
        const areaInM = parseFloat((areaInCM / 1000).toFixed(4));
        //changing values
        const replaceArea = event.target.parentNode.childNodes[1].childNodes[0];
        const replaceText = event.target.parentNode.childNodes[1].childNodes[1].childNodes[0];
        replaceArea.innerText = areaInM;
        replaceText.innerText = ' m';
        // disabling button
        event.target.setAttribute('disabled', '');
    })
}

//used in this file
function calculationButtonAbleOrDisabled(valueOne, valueTwo, btnCalculate) {

    const btnCalculateValueOne = btnCalculate.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1].value;
    const btnCalculateValueTwo = btnCalculate.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1].value;

    if (btnCalculateValueOne == '' || btnCalculateValueTwo == '') {
        alert('Empty field! Kindly write values');
        return false;
    }

    if (!isNaN(valueOne) == false || !isNaN(valueTwo) == false) {
        // const one = document.getElementById(calculateButtonId).setAttribute('disabled', '');
        alert("Please click on checkbox and set 2 values");
        return false;
    }
    else {
        // calculateButtonId.classList.add('bg-blue-800');
        const result = valueOne * valueTwo;
        return result;
    }
}
//tried to make another conversion
/* 
function convertMToCM (btnConversionClass, areaInM) {
    btnConversionClass.addEventListener('click', function (event) {
        const areaInCM = parseFloat((areaInM * 1000).toFixed(4));
        //changing values
        const replaceArea = event.target.parentNode.childNodes[1].childNodes[0];
        const replaceText = event.target.parentNode.childNodes[1].childNodes[1].childNodes[0];
        replaceArea.innerText = areaInCM;
        replaceText.innerText = ' cm';
        return false;
        //disabling button
        // event.target.setAttribute('disabled', '');
    })
} */