const repeatString = function(valueToRepeat,noOfTimes) {
    let newString=''
    if ( noOfTimes<0 || isNaN(noOfTimes)){
        return 'ERROR';
    } else {
  
        for (let i=0;i<noOfTimes;i++) {
            newString+=valueToRepeat;
        }
        return newString;
}
}

module.exports = repeatString
