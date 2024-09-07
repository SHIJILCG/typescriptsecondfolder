function addtwo(num:number):number{
    return num + 2
    
}
let result= addtwo(5)
console.log(result)
function getupper(val:string){
    return val.toUpperCase()
}
function signupuser(name:string,email:string,password:number){
      console.log(name,email,password)
}
var loginuser =(name:string,email:string,password:number=0)=>{
    if(password === void 0){password = 0}
}
console.log(loginuser("h","h@gmail.com"))
signupuser("shijil","shijilcg.com",20)
console.log(getupper("thi"))
console.log(addtwo(5))


// function getvalue(myvalue:number){
//     if(myvalue >5){
//           return true
//     }
//     return "200 OK"
// }
// console.log(getvalue(5))
const getHello=(s:string):string=>{
     return ""
}
const hertos=['thor',"spiderman","ironman"];

hertos.map((hero ):string=>{
      return `hero is ${hero}`
})

function consroleerror(errmessage:string):void{
    console.log(errmessage);
}
function handleerror(errmessage:string):never{
    throw new Error(errmessage)
}
consroleerror("hhihih");
console.log(hertos);



export{}