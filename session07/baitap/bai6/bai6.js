"use strict";
function TinNhan(hehe) {
    console.log(hehe);
}
function BaoLoi(LoiRoi) {
    throw new Error(LoiRoi);
}
TinNhan("Chồng em tới rồi");
try {
    BaoLoi("Lỗi rồi cứu");
}
catch (LoiRoi) {
    console.error(LoiRoi);
}
