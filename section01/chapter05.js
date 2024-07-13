//1.Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

//console.log(num1 + num2);
//console.log(num1 - num2);
//console.log(num1 * num2);
//console.log(num1 / num2);
//console.log(num1 % num2);
//나머지를 구하는 연산은 모듈러라고 부름

let inf = Infinity; //양의 무한대
let mInf = -Infinity;//음의 무한대

let nan = NaN;// NaN = Not a number라는 뜻

//console.log(1 * "hello");//말도 안되는 연산을 시키면 결과는 NaN으로 나옴
//불가능한 수치연산을 시켜도 프로그램이 종료되는게 아닌 NaN으로 결과가 출력

//2.String type
let myName = "한지인";
let myLocation = "동작구";
let introduce = myName + myLocation;

//console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다`
//백틱을 이용해서 문자열을 만들면 $와 {}를 통해서 변수의 값을 문자열에 포함시킬 수 있다. =>템블릿 리터럴 문법
console.log(introduceText);


//3. Boolean Type = > 현재상태를 나타낼 때 많이 사용
let isSwitchOn = true;  //isSwitchOn가 true면 isSwitchOn가 켜져있다는 것
let isEmpty = false;  //isEmpty가 false면 비어있지 않다는 것


//4. Null Type (아무것도 없다)
let empty = null; // 명시적으로 변수에 할당해줘야하는 값,  개발자가 어떠한 값도 없다고 표현할 떄 사용하는 값


//5. Undefined Type = > 변수를 선언하고 어떠한 값도 넣지 않았을 때 자동으로 할당되는 값
//변수를 미쳐 초기화하지 못했거나 존재하지 않는 값을 불러오려고 할 때 발생할 수 있는 값
let none;
console.log(none); // 결과로 Undefined가 출력됨