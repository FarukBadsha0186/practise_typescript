// let anything : any;

// anything=222;

const Kgtoconverter = (input: string | number) => {
    if (typeof input === 'number') {
        return input * 1000;


    } else if (typeof input === 'string') {

        const [value] = input.split("")
        return `converted is : ${Number(value) * 1000}`;


    }

};

const result = Kgtoconverter(2);
console.log(result);
const result1 = Kgtoconverter('2 kg ');

console.log(result1);