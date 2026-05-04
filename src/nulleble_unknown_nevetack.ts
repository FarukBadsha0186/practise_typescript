// nullebl types
const getUser=(input: String) => {
    if (input){ 
        console.log(`From DB: ${input}`);

    }else{
        console.log(`From user: All User`)
    }
};

getUser("Mezbha");