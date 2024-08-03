//1.배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
//console.log(one, two, three);

//세번째 원소 three는 변수에 저장하고 싶지 않으면 let [one, two, three] = arr;에서 three지우면 됨
//console.log(one, two, three);에서도 three 지우기 

//let [one, two, three,four] = arr;
//let [one, two, three,four = 4] = arr; // 1, 2, 3, 4
//console.log(one, two, three, four);      // 1,2,3,undefined

//2. 객체의 구조 분해 할당
let person = {
  name : "이정환",
  age : 27,
  hobby : "테니스",
};

let  {
  age : myAge,
  hobby,
  name,
  extra = "hello",//기본값 설정또한 배열의 구조 분해할당과 동일하게 이루어진다.
} = person;
//console.log(name, myAge, hobby, extra); //이정환, 27, 테니스,hello


//원래는 이렇게 해야하지만
//let name = person.name;
//let age = person.age;
//let hobby = person.hobby;

//구조분해할당을 통해 중괄호를 이용한다.
//let {name, age, hobby} = person;

//console.log(name, age, hobby, extra); // 이정환, 27, 테니스, hello


//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
//const func = (person)=>{
//     person.name;
 //    person.age;

//// 이런식으로 접근해야했지만

//구조분해할당을 이용하면 훨씬 더 간결하게 프로포티들을 받아올 수 있다.

//객체를 넘겼을 때만 중괄호와 함께 구조분해할당을 받을 수 있다.
//func(person)에서 person이라는 객체를 넘겼기 때문에 구조분해할당이 가능한것 만약 person이 아닌 10이면
//구조분해할당은 이루어지지않음

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);

