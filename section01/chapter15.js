//1.객체 생성
let obj1 = new Object()//객체 생성자
let obj2 = {};



//2. 객체 프로포치(객체 속성)
let person = {
   name : "이정환", 
  age : 27,
  hobby : "테니스",
  job : "FE Developer",
  extra : {},
  10 : 20,
 "like cat" : true,

};

//3. 객체 프로퍼티를 다루는 방법
//3.1 특정 프로포티에 접금(점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);


//let age =person["age2"];
console.log(age);   //undefined 반환

//let property = " hobby";
//let hobby = person[property];  //  결과 : 테니스

let age = person["age2"];

let property = "hobby";   
let hobby = person[property]; //괄호표기법에서는 변수에 접근하고자 하는 키값을 담아서 property 꺼내올 수 있도록 설정
                              //동적으로 property를 꺼내와야할 때는 괄호 표기법
console.log(hobby); 


//3.1 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);


//3.3 프로퍼티를 수정하는 방법
person.job = "educator"
person['favoriteFood'] = "초콜릿"

console.log(person)

//3.4 프로퍼티를 삭제하는 방법
delete  person.job;
delete person["favoriteFood"];


console.log(person);


//3.5 프로퍼터의 존재 유뮤를 확인하는 방법(in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1);



