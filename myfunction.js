"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num) {
    return num + 2;
}
var result = addtwo(5);
console.log(result);
function getupper(val) {
    return val.toUpperCase();
}
function signupuser(name, email, password) {
    console.log(name, email, password);
}
var loginuser = function (name, email, password) {
    if (password === void 0) { password = 0; }
    if (password === void 0) {
        password = 0;
    }
};
console.log(loginuser("h", "h@gmail.com"));
signupuser("shijil", "shijilcg.com", 20);
console.log(getupper("thi"));
console.log(addtwo(5));
// function getvalue(myvalue:number){
//     if(myvalue >5){
//           return true
//     }
//     return "200 OK"
// }
// console.log(getvalue(5))
var getHello = function (s) {
    return "";
};
var hertos = ['thor', "spiderman", "ironman"];
hertos.map(function (hero) {
    return "hero is ".concat(hero);
});
function consroleerror(errmessage) {
    console.log(errmessage);
}
function handleerror(errmessage) {
    throw new Error(errmessage);
}
consroleerror("hhihih");
console.log(hertos);
