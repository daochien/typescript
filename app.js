function add(n1, n2, showResult, pharse) {
    var result = n1 + n2;
    if (showResult) {
        console.log(pharse + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 10.2;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
