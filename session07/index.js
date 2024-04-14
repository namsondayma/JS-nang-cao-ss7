"use strict";
let numbers = [1, 2, 3, 4];
let students = ["hoa", "son", "phu"];
let obj = {
    name: "nam sơn",
    address: "hà nội",
    id: 1
};
let obj1 = {
    name: "nam sơn",
    address: "hà nội",
    id: 1
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["USER"] = 6] = "USER";
})(Role || (Role = {}));
let person = {
    name: "nam sơn",
    address: "hà nội",
    role: 5
};
function sayHello() {
    console.log("sayHello");
}
sayHello();
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));
function test(a) {
    if (typeof (a) === "string") {
        console.log(a.toUpperCase());
    }
}
test("text");
function typeNever() {
    let a = 1;
    while (true) {
        console.log("a+", ++a);
    }
}
