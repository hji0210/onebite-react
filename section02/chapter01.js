//1.Falsy한 값
let f1 = undefined;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;
//7가지들은 조건문에서 거짓


 if(!f2){
  console.log("falsy");
 }//undefined, 0, -0, NaN, "", 0n은 falsy한 값으로서 조건문에서는 거짓으로 평가된다.


 //2.Truthy한 값
 //7가지 falsy 한 값들 제외한 나머지 모든 값
 let t1 = "hello";
 let t2 = 123;
 let t3 = [];
 let t4 = {};
 let t5 = () => {};

 if(t5){
  console.log("Truthy");
}

//3. 활용
function printName(person){
  //if(person ===undefined || person ===null ){
    if(!person){
      //person이 undefined이나 null이면 거짓으로 판단해서 not연산자와 함께 true가 되어서 조건식이 참이 되면서 내부의 코드가 실행
      console.log("person의 값이 없음");
      return;
    }
    console.log(person.name);
    }




//let person; //타입 에러
//let person = null;
let person = {name : "이정환"};
//조건식이 거짓이 되어서   console.log(person.name); 접근 가능


//조건문에서 person이 undefined인것만 확인해서 null일때는 조건이 거짓이기 때문에  console.log(person.name);이 수행되서 오류발생 그래서 or연산자로 person의 값이 null일때에도 코드 수행하고 함수 종료시켜야함
printName(person);


//매개변수로 객체를 받으려하였는데 실제로는 undefined값이 들어오는 상황은 실제 서비스를 개발하다보면 자주발생
//보통 객체의 특정 proprity에 접근하는 기능을 담고있는 함수에서는 조건문으로 person매개변수의 합이 null이거나 undefined이 아님을 먼저 확인해줘야함
//Truthy, Falsy를 이용하지 않으면 person의 값이 undefined일 때  console.log로 person의 값이 없음이라고 출력하고 return으로 person.name을통해 전표기법을 접근하지 못하도록 함수종료
//undefined를 인수로 전달해도 if조건문에서 걸러져서 return이 되어서   console.log(person.name);가 실행되지 않아서 오류방지가능