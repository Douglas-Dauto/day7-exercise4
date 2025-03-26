// Day 7 - Exercise 3
var text = document.getElementById("texto");
var multiply;
var capitalize;
multiply = function (x, y) {
    return x * y;
};
capitalize = function (val) {
    return "".concat(val.charAt(0).toUpperCase()).concat(val.slice(1));
};
var valueText = capitalize("nifty ".concat(multiply(5, 10)));
console.log(valueText);
text.innerHTML = valueText;
