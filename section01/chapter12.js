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

// 함수 표현식 => 호이스팅 불가
let varB = function funcB() {
 // console.log("funB");

};



varB(); // "funcB" 출력 
funcB(); //함수의 이름으로 호출불가


//let varC = function () { //function funcB에서 funcB생략 가능 = > 익명함수
//  console.log("funB");

//};



//2. 화살표 함수
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