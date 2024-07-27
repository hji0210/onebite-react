//1.배열 생성
let arrA = new Array();
let arrB = []; //배열 리터럴(대부분 사용)


let arrC = [ 
  1,
  2,
  3,
  true,
   "hello", 
   null, 
   undefined,
    () => {},
     {},
     [],          //어떤 타입이든 다 저장가능
];
console.log(arrC);


//2. 배열 요소 접근
let item1 = arrC[0];  //결과 : 1
let item2 = arrC[1]; //결과 : 2

//배열의 원소 중에 몇번 째 원소를 가지고오고 싶은지 의미하는 숫자 = > 인덱스
//인덱스를 이용하면 배열 요소에 접근 가능
console.log(item1, item2);

arrC[0] = "hello";
console.log(arrC); //0이 hello로 바껴서 배열이 출력
