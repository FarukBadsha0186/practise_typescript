//res operator
const friends=['karim', 'bulbul','rafiq']
const schoolfriend =['pinti', 'chintu', 'bulbul']
const collegfriend= ['rafiq', 'jabbar' ,'akabr']

friends.push(...schoolfriend);


const user= {name:'Mezba', phoneNo:37824782348}
const userInformattion= {hobby:'play', favouritecolor:"red"}

 const unserInfo={...user,...userInformattion}
 console.log(unserInfo);