// Day 7 - Exercise 3

const text: HTMLElement = document.getElementById("texto");

let multiply: (x: number, y: number) => number;
let capitalize: (val: string) => string;

multiply = function (x: number, y: number): number {
    return x * y;
}

capitalize = function (val: string): string {
    return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
}

const valueText: string = capitalize(`nifty ${multiply(5, 10)}`);

console.log(valueText);
text.innerHTML = valueText;
