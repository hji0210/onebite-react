//1.상수 객체
const animal = {
  type : "고양이",
  name : "나비",
  color:"black",
};

animal.age=2; //추가
animal.name = "까망이" //수정
delete animal.color //삭제


console.log(animal);

//2. 메서드
// -> 값이 함수인 프로퍼티를 말함

//const person = {
  //name:"이정환",
  //메서드
  //sayHi : function() {
  //  console.log("안녕!")
  //},
//};

const person = {
  name:"이정환",
  //메서드 선언
  sayHi () {
    console.log("안녕!")
  },
};


person.sayHi(); //함수이기 때문에 호출가능
person["sayHi"]();//결과 : 안녕!

//메서드는 동작을 정의하는데 사용, 함수가 아닌 프로퍼티들이 정보를 가지고 있다면 함수 프로퍼티는 메서드로서 객체의 동작을 정의한다.