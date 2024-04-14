function TinNhan(hehe: string): void {
    console.log(hehe);
  } 
  function BaoLoi(LoiRoi: string): never {
    throw new Error(LoiRoi);
  }
  TinNhan("Chồng em tới rồi");
try {
  BaoLoi("Lỗi rồi cứu");    
} catch (LoiRoi) {
  console.error(LoiRoi);
}