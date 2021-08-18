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

let testSentence = 'Trying This Now.';
console.log('\"',testSentence, '\" has a space at index:', testSentence.indexOf(' ')); // look for index of space ( ' ' )

console.log('numDigit:', numDigit);
console.log( numDigit * 2 );
console.log( numString );
console.log( numString * 2 );

let newTestSentence = testSentence.replace(' ', '_')

console.log (newTestSentence)

let spaceReplace = 'This is a test!';

for( i=0; i<spaceReplace.length; i++){
    if( spaceReplace[i] === ' '){
        let replacedSpaceRepalce = spaceReplace.replace(spaceReplace[i],'_');
        spaceReplace = replacedSpaceRepalce;
    }  
} // end for statement
console.log (spaceReplace);