// 1. 콜백함수 = > main함수가 언제든지 원하는 타이밍에 실행시킬 수 있다
function main(value){
  //console.log(value);
  
  console.log(1);
  console.log(2);
  value();
  console.log("end");
  
  
  
  value(); 
  
  }
  function sub() {
    console.log("i am sub");
  }          //value매개변수에는 서브함수가 담겨져 있는 것이라 호출하는 것도 가능
  
  
  
  
  main(1); //main함수가 호출되면서 value값에 저장된 1이라는 값이 콘솔로서 출력됨  =>sub라는 함수를 인수로 main에 전달
  main(sub); // 자바스크립트에서는 함수도 문자나 숫자같은 값으로 취급된다.
  //함수 자체를 다른 함수의 인수로서 저장하는 것도 가능
  
  //인수 예시 : let result = add(3, 5);
  //매개변수 예시
  //function add(a, b) {
  //  return a + b;
  //}
  
  
  // 함수 표현식 처럼 써도됨 , 익명함수로 써도 문제가 되지 않는다 
  //main(function () {
  //  console.log("i am sub");
  //}//);
  
  
  //이렇게도 사용가능
  main(()  => {
    //console.log("i am sub");
  });  //화살표함수가 main함수의 콜백함수로 인수로 전달
  
  
  //2. 콜백함수의 활용
  //function repeat(count){
  //  for(let idx = 1; idx <= count; idx++){
  //    console.log(idx);
   // }
  
  //}
  
  
  
  //인수(argument): 함수를 호출할 때 전달되는 값입니다. main(1)에서 1이 인수입니다.
  //매개변수(parameter): 함수를 정의할 때 선언되는 변수로, 함수가 호출될 때 받아들이는 값입니다. main 함수의 value 매개변수는 함수를 받는 역할을 합니다.
  
  
  //function repeatDouble(count){
  //  for(let idx = 1; idx <= count; idx++){
     // console.log(idx * 2);
   // }
  
  //}
  
  
  
  
  //repeat(5);
  //repeatDouble(5);
  
  // 위처럼 하지말고,
  
  function repeat(count, callback){
    for(let idx = 1; idx <= count; idx++){
    callback(idx);
   }
  }
  //repeat함수 안에서 반복문을 돌면서 반복마다 callback함수를 호출하면서 idx를 1~5까지전달
  repeat(5, function(idx) {
    console.log(idx)
  } 
   );
  
   //
  
   repeat(5, function(idx){
    console.log(idx * 2);
   })
  
  
  
   repeat(5, function(idx){
    console.log(idx * 3);
   })
  
  
   //콜백함수를 이용하면 중복코드를 제거하면서 간결하게 코드 작성 가능 
  //이렇게도 변경가능
  
   repeat(5, function (idx) {
    console.log(idx);
  });
  
  repeat(6, (idx) => {
    console.log(idx);
  });