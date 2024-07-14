//1. 함수표현식 : 함수선언문을 이용해서 함수를 만들지않고 varB처럼 값으로서 함수를 생성하는 것
//funcA와는 달리 함수표현식으로 만든 함수들은   값으로서 취급되기 때문에 호이스팅 대상 X

function funcA(){
//console.log("funcA")
}  

funcA(); // "funcA" 출력

let varA = funcA; // "funcB" 출력
console.log(varA);//함수 자체가 콘솔에 출력됨 = > varA
//함수를 변수에 담게 되면 함수를 변수의 이름으로 호출
varA(); // "funcA" 출력함

// 함수를 굳이 먼저 선언하지 않고, 변수에 담을 수 있음
// 함수를 만들자마자 변수에 담음 : 이런건 함수 표현식이라고 한다.
// 함수 표현식 => 호이스팅이 안되기 떄문에 실행부를 위에 사용할 수 없다.
let varB = function funcB() {
 // console.log("funB");

};



varB(); // "funcB" 출력 :  함수 표현식은 그냥 호출만해도 콘솔에 찍힘
funcB(); //함수의 이름으로 호출불가


//let varC = function () { //function funcB에서 funcB생략 가능 = > 익명함수
//  console.log("funB");

//};



//2. 화살표 함수
// -> funcB()를 호출하지 못하기 떄문에, 따라서 funcB 이름을 생략하고
// let varB = function () {} -> 이런식으로 선언하자마자 변수에 담을 수 있다.
// -> 이름이 없기 떄문에 익명함수라고 함
// + 그리고 일반 함수처럼 선언형이 아니기 때문에, 호이스팅이 불가하다.
// 호이스팅 : 선언부보다 실행부가 위에 있어도 인식하는 것.
//let varC = () => {
//  return 1;
//};

let varC = () =>  1;   //return 생략 가능


//console.log(varC()); //1이 출력됨


let varD = (value) => value +  1;  


//console.log(varD(10)); //11이 출력됨


let varE = (value) => value +  1;  


//console.log(varE(10)); //11이 출력됨


let varF = (value) => {
  console.log(value);   //10이 출력
  
   return value + 1;  //11이 반환

}  
console.log(varF(10));//11출력