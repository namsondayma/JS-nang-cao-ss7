"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["ThuHai"] = 0] = "ThuHai";
    WeekDays[WeekDays["ThuBa"] = 1] = "ThuBa";
    WeekDays[WeekDays["ThuTu"] = 2] = "ThuTu";
    WeekDays[WeekDays["ThuNam"] = 3] = "ThuNam";
    WeekDays[WeekDays["ThuSau"] = 4] = "ThuSau";
    WeekDays[WeekDays["ThuBay"] = 5] = "ThuBay";
    WeekDays[WeekDays["ChuNhat"] = 6] = "ChuNhat";
})(WeekDays || (WeekDays = {}));
let weekDays;
for (let day in WeekDays) {
    if (isNaN(Number(day))) {
        console.log(day);
    }
}
