module.exports = function toReadable (number) {
    const uniqueNumbers = {
        0: 'zero',
        1: 'one', 
        2: 'two', 
        3: 'three', 
        4: 'four', 
        5: 'five', 
        6: 'six', 
        7: 'seven', 
        8: 'eight', 
        9: 'nine', 
        10: 'ten',
        11: 'eleven', 
        12: 'twelve', 
        13: 'thirteen', 
        14: 'fourteen', 
        15: 'fifteen', 
        16: 'sixteen', 
        17: 'seventeen', 
        18: 'eighteen', 
        19: 'nineteen', 
        20: 'twenty', 
        30: 'thirty', 
        40: 'forty', 
        50: 'fifty', 
        60: 'sixty', 
        70: 'seventy', 
        80: 'eighty', 
        90: 'ninety',
        hundred: 'hundred'
    }

    function newFunction(element, index, array) {
        const heroboro = Number(`${array[1]}`+`${array[0]}`)
        const isUniqueNumber = uniqueNumbers[heroboro] !== undefined;
      
            if(heroboro === 0 && array.length > 1 && index !== 2) {
              return ''
            }  
      
            if(index === 1) {
              return isUniqueNumber ? uniqueNumbers[heroboro] : uniqueNumbers[element*10];
            }
            if(index === 0) {
              return isUniqueNumber ? '' : uniqueNumbers[element] ;
            }
      
            return uniqueNumbers[element] + (index === 2 ? ' hundred' : ' ');
    }
      
    const numberDigitsArray = Array.from(String(number), Number).reverse();
    const humanReadableDigitsArray = numberDigitsArray.map(newFunction).reverse();
    return humanReadableDigitsArray.filter(Boolean).join(" ");
      
}
    