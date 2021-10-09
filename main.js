const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-no");
const checkNumberButton = document.querySelector("#check-no");
const outputBox = document.querySelector("#output-Box");

checkNumberButton.addEventListener('click',function checkBirthdateIsLucky(){
    const dob =dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValues(sum,luckyNumber.value);
    }
});
function calculateSum(dob){ 
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let idx=0;idx<dob.length;idx++){
        sum +=Number(dob.charAt(idx));
    }
    return sum;
}
function compareValues(sum,luckyNumber){
    if(sum % luckyNumber == 0){
        console.log("Your Birthdate is lucky😍");
        outputBox.innerText = "Your Birthdate is lucky😍";
    }
    else{
        console.log("You make your own luck😎");
        outputBox.innerText="You make your own luck😎";
    }
}