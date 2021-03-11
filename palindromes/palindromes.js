const palindromes = function(text) {
    processedText=text.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (processedText.split('').reverse().join('')=== processedText ? true :false)

}
module.exports = palindromes

/*
 */