//5가지 요소 순회 및 탐색 메서드
//1.foreach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 =[1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //console.log(idx, item * 2);
});

let doubleArr = [];

arr1.forEach((item)=>{
  doubleArr.push(item * 2);
});

//console.log(doubleArr); 2, 4, 6


//2.inclues
//배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

//console.log(isInclude);//3이라는 값이 존재해서 true


//3. indexOf
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드

let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
//console.log(index);//2라는 값이 1번 index에 있어서 결과가 1

let objectArr = [
 { name : 이정환},
 {name : "홍길동"},
];

console.log(
  ObjectArr.indexOf({name:"이정환"})

);
//얕은 비교로만 해서   ObjectArr.indexOf({name:"이정환"})이러한 객체값은 찾지 못한다


console.log(
  ObjectArr.findedIndex(
    (item) => item.name === "이정환"
  )
);





//0으로 정확한 위치를 찾아냄

//4.findIndex
//모든 요소를 순회하면서, 콜백함수를 만족하는 그런
//특정 요소의 인덱스(위치)를 반환하는 메서드
//복잡한 객체값도 조건식만 잘 만들면 쉽게찾아낼 수 있다는 장점이 있음
//let arr4 =[1, 2, 3];
//const findedIndex = arr4.findIndex(


//);
///const findedIndex = arr4.findIndex((item) => item % 2 !=0);
//item이 2로 나누어떨어질때는 true로 반환, 그렇지 않으면 false를 반환

const findedIndex = arr4.findIndex(
  

  ( item) => item === 999
  //원하는 값이 없으면 -1 반환
);

//console.log(findedIndex);


//단순한 원시타입 값을 찾을 때 =>index of
//복잡한 객체타입 값을 찾을 때 => findedIndex


//5.find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
{ name : "이정환"},
{name : "홍길동"},
];

const finded = arr5.find(
 (item) => item.name ==="이정환"
);

console.log(finded);
//객체 자체가 반환되기 때문에  name : "이정환"출력
