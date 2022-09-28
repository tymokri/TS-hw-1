interface user {
    name?:string,
    surName:string,
}

const obj:user = {
    name:"John",
    surName:"Smith",
}

obj.name = "Pete";
delete obj.name;



type numList = Array<number>;
const list:numList = [1, 2, 3, -1, -2, -3];

function isPositiveNumber(element:number) :boolean {
    return element > 0;
}

console.log(list.every(isPositiveNumber));