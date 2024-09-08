//6가지의 요소 조작 메서드

//1.push
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
//arr1.push(4, 5, 6, 7);
const newLength = arr1.push(4, 5, 6, 7);

//console.log(arr1); //1,2,3,4,5,6,7
//console.log(newLength);//7이 출력


//2.pop
//배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const popedItem =arr2.pop();

//console.log(popedItem);
//console.log(arr2);  //1,2

//3.shift
let arr3 = [1, 2, 3];
const shiftItem = arr3.shift()
//console.log(shiftItem, arr3);//제거된 아이템1, 2와 3만 남아있다.

//4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 =[1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4);//0, 1, 2, 3

//5.slice
//마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);//2번 인덱스부터 시작해서 5번 인덱스 전까지 짜름 : 4번까지 짜름
//slice메서드의 두번째 인수로 전달하는 인덱스는 꼭 +1을 해서 넣어야함
//5는 생략 가능
let sliced2 = arr2.slice(2);//3, 4, 5가 출력됨
let sliced3 = arr5.slice(-1);//-는 뒤에서 짜르기 때문에 5가 출력됨


//console.log(sliced); //3, 4, 5가 출력됨
//console.log(arr5);

//6.concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 =[1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);