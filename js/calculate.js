//total area calculation
let numberOfAreaCalculation = 0;

// card one calculation
document.getElementById('calculate-triangle-area').addEventListener('click', function (event) {

    const multiplicationResult = getValueAndMultiplication('triangle-value-one', 'triangle-value-two', 'calculate-triangle-area');

    // unchecked checkbox
    makeCheckboxUncheckedandInputValuesEmpty('calculate-triangle-area');

    //get area
    let areaInCM = multiplicationResult * 0.5;
    
    if (multiplicationResult !== false) {
        areaInCM = parseFloat(areaInCM.toFixed(2));
        numberOfAreaCalculation++;
        const areaProperty = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        makeDivForAreaCalculation(numberOfAreaCalculation, areaProperty, areaInCM);
    }
    else {
        return;
    }
    //conversion
    const btnConversionClasses = document.getElementsByClassName('area-calculation-result');
    for (let btnConversionClass of btnConversionClasses) {
        conversionReturn = convertCMToM(btnConversionClass, areaInCM);
    }
})

// card two calculation
document.getElementById('calculate-rectangle-area').addEventListener('click', function (event) {

    const multiplicationResult = getValueAndMultiplication('rectangle-value-one', 'rectangle-value-two', 'calculate-rectangle-area');

    // unchecked checkbox
    makeCheckboxUncheckedandInputValuesEmpty('calculate-rectangle-area');

    //get area
    let areaInCM = multiplicationResult;
    
    if (multiplicationResult !== false) {
        areaInCM = parseFloat(areaInCM.toFixed(2));
        numberOfAreaCalculation++;
        const areaProperty = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        makeDivForAreaCalculation(numberOfAreaCalculation, areaProperty, areaInCM);
    }
    else {
        return;
    }

    //conversion
    const btnConversionClasses = document.getElementsByClassName('area-calculation-result');
    for (let btnConversionClass of btnConversionClasses) {
        conversionReturn = convertCMToM(btnConversionClass, areaInCM);
    }
})

// card three calculation
document.getElementById('calculate-parallelogram-area').addEventListener('click', function (event) {

    const multiplicationResult = getValueAndMultiplication('parallelogram-value-one', 'parallelogram-value-two', 'calculate-parallelogram-area');

    // unchecked checkbox
    makeCheckboxUncheckedandInputValuesEmpty('calculate-parallelogram-area');

    //get area
    let areaInCM = multiplicationResult;
    
    if (multiplicationResult !== false) {
        areaInCM = parseFloat(areaInCM.toFixed(2));
        numberOfAreaCalculation++;
        const areaProperty = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        makeDivForAreaCalculation(numberOfAreaCalculation, areaProperty, areaInCM);
    }
    else {
        return;
    }

    //conversion
    const btnConversionClasses = document.getElementsByClassName('area-calculation-result');
    for (let btnConversionClass of btnConversionClasses) {
        conversionReturn = convertCMToM(btnConversionClass, areaInCM);
    }
})

// card four calculation
document.getElementById('calculate-rhombus-area').addEventListener('click', function (event) {

    const multiplicationResult = getValueAndMultiplication('rhombus-value-one', 'rhombus-value-two', 'calculate-rhombus-area');

    // unchecked checkbox
    makeCheckboxUncheckedandInputValuesEmpty('calculate-rhombus-area');

    //get area
    let areaInCM = multiplicationResult * 0.5;
    
    if (multiplicationResult !== false) {
        areaInCM = parseFloat(areaInCM.toFixed(2));
        numberOfAreaCalculation++;
        const areaProperty = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        makeDivForAreaCalculation(numberOfAreaCalculation, areaProperty, areaInCM);
    }
    else {
        return;
    }

    //conversion
    const btnConversionClasses = document.getElementsByClassName('area-calculation-result');
    for (let btnConversionClass of btnConversionClasses) {
        conversionReturn = convertCMToM(btnConversionClass, areaInCM);
    }
})

// card five
document.getElementById('calculate-pentagon-area').addEventListener('click', function (event) {

    const multiplicationResult = getValueAndMultiplication('pentagon-value-one', 'pentagon-value-two', 'calculate-pentagon-area');

    // unchecked checkbox
    makeCheckboxUncheckedandInputValuesEmpty('calculate-pentagon-area');


    //get area
    let areaInCM = multiplicationResult * 0.5;
    
    if (multiplicationResult !== false) {
        areaInCM = parseFloat(areaInCM.toFixed(2));
        numberOfAreaCalculation++;
        const areaProperty = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        makeDivForAreaCalculation(numberOfAreaCalculation, areaProperty, areaInCM);
    }
    else {
        return;
    }

    //conversion
    const btnConversionClasses = document.getElementsByClassName('area-calculation-result');
    for (let btnConversionClass of btnConversionClasses) {
        conversionReturn = convertCMToM(btnConversionClass, areaInCM);
    }
})

// card six
document.getElementById('calculate-ellipse-area').addEventListener('click', function (event) {

    const multiplicationResult = getValueAndMultiplication('ellipse-value-one', 'ellipse-value-two', 'calculate-ellipse-area');

    // unchecked checkbox
    makeCheckboxUncheckedandInputValuesEmpty('calculate-ellipse-area');

    //get area
    let areaInCM = multiplicationResult * 3.1416;
    
    if (multiplicationResult !== false) {
        areaInCM = parseFloat(areaInCM.toFixed(2));
        numberOfAreaCalculation++;
        const areaProperty = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        makeDivForAreaCalculation(numberOfAreaCalculation, areaProperty, areaInCM);
    }
    else {
        return;
    }

    //conversion
    const btnConversionClasses = document.getElementsByClassName('area-calculation-result');
    for (let btnConversionClass of btnConversionClasses) {
        conversionReturn = convertCMToM(btnConversionClass, areaInCM);
    }
})