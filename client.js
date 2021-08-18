console.log ('js');

function sentenceToSay( sentence ) {
    console.log ('sentence is:', sentence);
    if(sentence[sentence.length -1] === '!'){
        return sentence += '!!';
    } //end if
    else if(sentence[sentence.length-1] === '.' || sentence[sentence.length-1] === '?'){
        let slicedSentence = sentence.slice ( 0, -1 )
        return slicedSentence += '!';
    } // end else if
    else {return sentence += '!';
    } //end else   
    } // end fucntion call
console.log(sentenceToSay('This is a test!'));

let numString = '267'

let numDigit = Number(numString) // Yes, This Works to convert String to Number
// let numDigit = numString * 1; // Yes, This works to convert String to Number


console.log('numDigit:', numDigit);
console.log( numDigit * 2 );
console.log( numString );
console.log( numString * 2 );

