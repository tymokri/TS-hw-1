"use strict";
const obj = {
    name: "John",
    surName: "Smith",
};
obj.name = "Pete";
delete obj.name;
const list = [1, 2, 3, -1, -2, -3];
function isPositiveNumber(element) {
    return element > 0;
}
console.log(list.every(isPositiveNumber));
