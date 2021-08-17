//console.log ('js');
function sentenceToSay( sentence ) {
    console.log ('sentence is:', sentence);
    if(sentence[sentence.length -1] === '!'){
        return sentence += '!!';
    } //end if
    return sentence += '!';
    //return sentence = sentence + '!';
}
console.log (sentenceToSay('This is a test!'));
alert (sentenceToSay('This is a test!'));

