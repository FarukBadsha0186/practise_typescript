//object  destructuring

const user={
    id:233,
    name:{
        firstname:"arman",
        middlename:"arman",
        lastname:"arman",
    },
    gender:'male',
    favouriteColor:"black" ,
}

const {favouriteColor}=user;
console.log(favouriteColor);
