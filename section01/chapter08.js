//1. null 
// - > 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자


let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // => 10
let var5 = var1 ?? var3;  // => 20
let var6 = var2 ?? var3;  // 맨처음에 적힌 10이 반환됨




//var1랑 var2 중에 null이랑 undefined가 아닌 값을 찾아냄
//var1는 초기화를 하지 않아서 undefined가 들어가 있음
//undefined가 아닌 10을 찾아서 var4에 저장됨


let userName = "이정환";
let userNickName = "winterload";


let displayName = userName ?? userNickName; //==>이정환




//userName이 undefined이면 winterload가 들어가고
//userName이 있으면  userName이 displayName에 저장

//2. typeOf 연산자 
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자


let var7 = 1;
var7 = "hello";
//코드 실행에 따라서 number타입이였다가 string타입으로 동적으로 바뀔 수 있음
var7 = 20;


let tl = typeof var7;  // => hello가 string 때문에 결과값은 string, 20이면 결과값은 number


//3. 삼항 연산자
// - > 항을 3개 사용하는 연산자
// - > 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 반환
let var8 = 10;


//요구사항 : 변수 res에 var8의 값이 짝수 - > "짝", 홀수 -> "홀"처럼 조건에 따라 다른값을 저장해야될때
 let res = var8 % 2 === 0? "짝수" : "홀수" //2로 나누었을 때 나누어 떨어진다면 짝수로 저장하고 아니면 홀수로 저장해라 => 결과 : 짝수
//?를 기준으로 첫번째항에는 조건식을 적고 물음표뒤에 콜론을 기준으로 왼쪽에는 참일 때의 반환값, 세번째항에는 거짓일 때의 반환값을 적으면 됨
