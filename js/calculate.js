//total area calculation
let numberOfAreaCalculation = 0;

// card one calculation
document.getElementById('calculate-triangle-area').addEventListener('click', function (event) {

   const muliplicationResult =  getValueAndMuliplication('triangle-value-one', 'triangle-value-two');

    //get area
    let areaInCM = muliplicationResult * 0.5;
    areaInCM = parseFloat(areaInCM.toFixed(2));

    if (muliplicationResult !== false) {
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
    
    const muliplicationResult =  getValueAndMuliplication('rectangle-value-one', 'rectangle-value-two');

    //get area
    let areaInCM = muliplicationResult;
    areaInCM = parseFloat(areaInCM.toFixed(2));

    if (muliplicationResult !== false) {
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
    
    const muliplicationResult =  getValueAndMuliplication('parallelogram-value-one', 'parallelogram-value-two');

    //get area
    let areaInCM = muliplicationResult;
    areaInCM = parseFloat(areaInCM.toFixed(2));

    if (muliplicationResult !== false) {
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
    
    const muliplicationResult =  getValueAndMuliplication('rhombus-value-one', 'rhombus-value-two');

    //get area
    let areaInCM = muliplicationResult * 0.5;
    areaInCM = parseFloat(areaInCM.toFixed(2));

    if (muliplicationResult !== false) {
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
    
    const muliplicationResult =  getValueAndMuliplication('pentagon-value-one', 'pentagon-value-two');

    //get area
    let areaInCM = muliplicationResult * 0.5;
    areaInCM = parseFloat(areaInCM.toFixed(2));

    if (muliplicationResult !== false) {
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
    
    const muliplicationResult =  getValueAndMuliplication('ellipse-value-one', 'ellipse-value-two');

    //get area
    let areaInCM = muliplicationResult * 3.1416;
    areaInCM = parseFloat(areaInCM.toFixed(2));

    if (muliplicationResult !== false) {
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