const createArray = (value: string) => [value];

const createArraywithSreing = (value: string) => [value]

const createArraywithNumber = (value: Number) => [value]

const createArraywithUserObj = (value: { id: number; name: string }) => {
    return [value]
}

const arrayString = createArraywithSreing('apple');

const arrnum = createArraywithNumber(434);
const arryobj = createArraywithUserObj({
    id: 123,
    name: "next lebel",

});
// const  cretaearraywithgeneratic= <T> (value:T)=>{

// }

