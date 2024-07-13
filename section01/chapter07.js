//1. 대입 연산자 : 변수의 값을 저장할 때 사용하는 기초적인 연산자
let var1 = 1;


//2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
//곱셈, 나눗셈,모듈러 연산자가  덧셈,뺄셈 연산자보다 우선순위가 높다. 

let num6 = 1 + 2 * 10; // 21
let num7 = (1 + 2) * 10;//더하기부터 계산하고 싶을 시  => 30
//console.log(num6);


//3. 복합 대입 연산자 = > 산술 연산자 + 대입 연산자
let num8 = 10;
num8 += 20; //num8 = num8 + 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 20;

//4. 증감 연산자
++num8;
num8++;



//console.log(num8++);//변수명 뒤에 ++쓰면 28번줄이 끝나고  29번 라인에 가서야 1이 증가됨
//num5++;
//console.log(num8);
//해당 라인에서 그대로 연산이 적용되기를 원하면 num +=1이나 ++num8을 씀
//console.log(--num8);//전위 연산  = >9
//console.log(num8--);//후위 연산   =>9

//console.log(num8); // 8

//5. 논리 연산자
let or = true || false;  //두 개의 값 중 하나만 참이면 참

let and = true && false;  //두 개의 값이 모두 true가 되야 true가 됨, 여기서는 false가 있어서 false가 출력됨

let not = !true; //1. true라면 false 2.false라면 true가 출력됨

//console.log(or,and,not); //=>true,false,false

//6. 비교 연산자
let comp1 = 1 === 2;  //1과 2가 값이 같은지 비교하는 동등비교 , =을 두개만 쓰면 1숫자 '1'문자 일 떄 값이 true로 나옴(자료형까지 비교를 안해줌)
let comp2 = 1 !== 2;//두 개의 값이 서로 같지 않은지 비교
console.log(comp1, comp2); // = >false, true

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 =< 2;