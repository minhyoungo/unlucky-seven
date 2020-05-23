import express from "express";

const PORT = 7777;
const app = express();
app.listen(PORT, () => {
  console.log(`${PORT} server start!!`);

  //배열 arr 을 초기화 한다.
  const arr = new Array();

  //초기화된배열 arr 을 출력한다.
  console.log(arr);

  //arr의 데이터를 추가한다.
  arr.push("방효진");

  //데이터가 추가된 arr을 출력한다.
  console.log(arr);

  //arr의 데이터를 추가한다.
  arr.push("정예림");
  arr.push("오은하");
  arr.push("박여원");
  arr.push("홍민기");
  arr.push("오민형");
  arr.push("신태섭");
  arr.push("정예림");
  arr.push("오은하");
  arr.push("박여원");
  arr.push("홍민기");
  arr.push("오민형");
  arr.push("신태섭");

  //데이터가 추가된 arr을 출력한다.
  console.log(arr);

  //4번 index를 출력한다.
  console.log(arr[4]);

  //배열의 갯수를 출력한다.
  console.log(arr.length);

  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}님 교육청으로 오세용`);
  }
});
