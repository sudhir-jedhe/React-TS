// Functional Requirements
// It should replace all but the 1st and last 4 digits in the provided sequence.
// Should not mask input shorter than 6 characters.
// Should not mask non-numeric characters.
// Should return empty string for all other input types apart from string and number.
// Syntax
// maskify(cardNumber);
// Arguments
// cardNumber (string | number): The credit card number provided by the user.
// Return
// the masked version of the card number as a string
// Example
// maskify('5512103073210694');
// // 5###########0694

// maskify('4556-3646-0793-5616')
// // 4###-####-####-5616

// maskify('');
// // ''

// maskify('Devtools Tech');
// // Devtools Tech

// maskify('S2k3i4p65p7y');
// // S#k#i#p#5p7y


function isNumeric(val){
    return /^\d+$/.test(val)
  }
  
  function maskify(cardNumber) {
    if(typeof cardNumber !== 'string' && typeof cardNumber !== 'number'){
      return ''
    }
  
    cardNumber = cardNumber.toString()
    const n = cardNumber.length
  
    if(n <= 6){
      return cardNumber
    }
  
    let maskedNumber = ''
  
    for(let i=0; i < n; i++){
      if (i > 0 && i < n - 4 && isNumeric(cardNumber[i])){
        maskedNumber += '#'
      }else{
        maskedNumber += cardNumber[i]
      }
    }
    return maskedNumber
  };

  /************************************************ */


  function maskify(cardNumber) {
  
    const inputType = typeof cardNumber
    if (inputType !== 'number' && inputType !== 'string') {
      return ''
    }
    let asString = String(cardNumber)
    if(cardNumber.length<6){
      return asString
    }
    
    
    let firstNumber = asString.slice(0,1)
    let lastFour = asString.slice(-4)
    let masked = asString.slice(1, length - 4).replace(/\d/g, '#')
    return `${firstNumber}${masked}${lastFour}`
    console.log(asString,firstNumber,lastFour,masked)
   
  }

  /**************************************************** */

  function maskify(cardNumber) {
    // write your code below
    if (typeof cardNumber !== "number" && typeof cardNumber !== "string")
      return "";
    cardNumber = cardNumber.toString()
    let ans = ""
    if (cardNumber.length < 6)
      return cardNumber;
    for (let i = 1; i < cardNumber.length - 4; i++) {
      if (!isNaN(parseInt(cardNumber[i]))) {
        ans += "#"
      }
      else {
        ans += cardNumber[i];
      }
  
    }
  
    return cardNumber[0] + ans + cardNumber.slice(cardNumber.length - 4);
  }