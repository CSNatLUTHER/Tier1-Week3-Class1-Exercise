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


// converting strings to number

let numString = '267'
let numDigit = Number(numString) // Yes, This Works to convert String to Number
// let numDigit = numString * 1; // Yes, This works to convert String to Number
console.log('numDigit:', numDigit);
console.log( numDigit * 2 );
console.log( numString );
console.log( numString * 2 );

let testSentence = 'Trying This.';
console.log('\"',testSentence, '\" has a space at index:', testSentence.indexOf(' ')); // look for index of space ( ' ' )
let newTestSentence = testSentence.replace(' ', '_');
console.log (newTestSentence);

// function grammerUpdate(bangReplace){
// console.log ('Sentence before grammerUpdate:', bangReplace)
// // replace all punctuation with exclamitories with a for loop and replace method
// for( i=0; i<bangReplace.length; i++){
//     if( bangReplace[i] === '.' ){
//         let replacedBangRepalce = bangReplace.replace(bangReplace[i],'!');
//         bangReplace = replacedBangRepalce;
//     }  //end if
//     else if ( bangReplace[i] === '?' ){
//         let replacedBangRepalce = bangReplace.replace(bangReplace[i],'!?!');
//         bangReplace = replacedBangRepalce;
//         i++
//         i++
//     } // end else if
//     else if ( bangReplace[i] === '!' ){
//         let replacedBangRepalce = bangReplace.replace(bangReplace[i],'!!!');
//         bangReplace = replacedBangRepalce;
//         i++
//         i++
//    } //end else if
// } // end for statement
// return bangReplace;
// } // end grammerUpdate function
// console.log ('Sentence after grammerUpdate:', grammerUpdate('This is a test? Does it work? I think it does?'));

// let bangReplace = 'This is a test! Did it work? Yes it did!'
// console.log ('Sentence before bangReplace:', bangReplace);
// for( i=0; i<bangReplace.length; i++){
//     if( bangReplace[i] === '!' ){
//         let replacedBangReplace = bangReplace.replace(bangReplace[i],'!!!');
//         bangReplace = replacedBangReplace;
//         i++;
//         i++;
//     }  //end if
//     else if( bangReplace[i] === '?' ){
//         let replacedBangReplace = bangReplace.replace(bangReplace[i],'!?!');
//         bangReplace = replacedBangReplace;
//         i++;
//         i++;
//     } // end else if
// //     else if ( bangReplace[i] === '!' ){
// //         let replacedBangRepalce = bangReplace.replace(bangReplace[i],'!!!');
// //         bangReplace = replacedBangRepalce;
// //         i++
// //         i++
// //    } //end else if
// } // end for statement
// console.log ('Sentence after bangReplace:', bangReplace);

function puncReplace(testSentence){
    console.log( testSentence );
    for(i=0; i<testSentence.length; i++){
        if(testSentence[i] === '.'){
           let updateSentence =  testSentence.replace(testSentence[i], "!");
           testSentence = updateSentence;
        } // end if
        else if(testSentence[i] === '?'){
            let updateSentence =  testSentence.replace(testSentence[i], "!");
            testSentence = updateSentence;
        } // end else if
       
    } // end for loop
    return testSentence;
}
console.log(puncReplace( 'This is a test. Will it work? I hope so!'));