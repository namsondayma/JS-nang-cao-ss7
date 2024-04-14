enum WeekDays {
    ThuHai,
    ThuBa,
    ThuTu,
    ThuNam,
    ThuSau,
    ThuBay,
    ChuNhat
  }
  
  let weekDays: WeekDays;
  
  for (let day in WeekDays) {   
    if (isNaN(Number(day))) {
      console.log(day);
    }
  }