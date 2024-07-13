//1.묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);     //변수 num에 저장된 숫자값 10이 덧셈하는 과정에서 묵시적으로 string으로 형변환되서 1020으로 출력됨



//2. 명시적 형 변환
// - > 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// - > 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);      //문자열을 숫자로 변환하기 위해 Number라는 내장함수 사용할 수 있다.
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = Number(str2);   //숫자 + 문자 => NaN나옴
//let strToNum2 = parseInt(str2); //숫자값이 아닌 값을 포함하고 있는 문자열도 숫자값으로 변환해줌


//숫자만 포함하고 있는 게 아닌 문자열을 포함하는 형변환을 할 떄 parseInt같은 내장함수를 사용하면 된다.
//parseInt를 쓰려면 숫자가 앞쪽에 나와있어야 한다.
console.log(strToNum2);       //let strToNum2 = Number(str2); 하면 수치연산이 실패해서 Nan이 나옴 

//숫자 - > 문자열
let num1 = 20;
let numToStr1 = String(num1);  //string이라는 내장함수를 통해 값이 문자열로 형변환이 이루어짐

console.log(numToStr1 + "입니다");