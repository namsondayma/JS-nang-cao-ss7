let numbers:number[]=[1,2,3,4];
let students:string[]=["hoa","son","phu"];

let obj={
    name:"nam sơn",
    address:"hà nội",
    id:1
}
let obj1:{
    name:string,
    address:string,
    id:number
}={
    name:"nam sơn",
    address:"hà nội",
    id:1
}
enum Role {
    ADMIN=5,
    USER
}
let person:{
    name:string,
    address:string,
    role:Role.ADMIN
}={
    name:"nam sơn",
    address:"hà nội",
    role:5
}

function sayHello():void{
    console.log("sayHello");
}
sayHello();
function sum(a:number,b:number):number{
         return a+b
}
console.log(sum(3,4))

function test(a:unknown){
    if(typeof(a)==="string"){
        console.log(a.toUpperCase());
    }
}
test("text");

function typeNever():never{
    let a:number = 1;
    while(true){
        console.log("a+",++a);
    }
}