//map types


const arrayOfNum: number[] = [2, 3, 4];

const arrayOfstring: string[] = ["2", "4", "5"];

const arrayOfStringUsingMAp: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMAp);