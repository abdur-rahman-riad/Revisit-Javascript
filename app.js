function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = parseInt(caseInput.value);
    if (isIncreasing == true) {
        caseNumber = caseNumber + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = caseNumber - 1;
    }
    caseInput.value = caseNumber;
    //Update Case Total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}

// Phone Increse Decrese Event Handle
document.getElementById('phone-plus').addEventListener('click', function () {
    console.log("Phone Plus Clicked");
});
document.getElementById('phone-minus').addEventListener('click', function () {
    console.log("Phone Minus Clicked");
});

// Case Increse Decrese Event Handle
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
});