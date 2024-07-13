//1.변수 : 프로그램이 실행되는 도중에 값을 바꿔가면서 저장할 수 있는 저장소
let age = 27;
console.log(age);

age=30;
console.log(age);

//let age=40; 중복된 이름으로 다시 선언 불가  


//2.상수 : 한번 저장된 값을 다시는 바꿀 수 없다.
const birth = "1997.01.07"; 

//생일처럼 변할 수 없거나 앞으로 변하지 말하야 하는 값일 때 상수를 씀
//선언과 동시에 반드시 초기화해야함 => const birth; 이렇게 못씀
birth = "123"; // 재할당 못함


//3.변수 명명규칙(네이밍 규칙)
//3.1   $,-_ 제외한 기호는 사용할 수 없다.
let $_name;

//3-2. 숫자로 시작할 수 없다.=> let 2name1는 불가
//숫자는 중간이나 끝에 사용가능
let name1;
let _2name;
let $name;

//3-3. 예약어를 사용할 수 없다.
// let let;
// let const;
//let if;

//4.변수 명명 가이드
//let a = 1;  x
//let b = 1;  x 
//let c =  a - b; x

let salesCount = 1;  
let refundCount = 1;  
let totalSalesCount =  salesCount - refundCount; 




