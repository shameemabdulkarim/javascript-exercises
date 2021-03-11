const removeFromArray = function(inputArr,...values) {
    return  inputArr.filter(el=>
        !values.includes(el));
    }

module.exports = removeFromArray
    