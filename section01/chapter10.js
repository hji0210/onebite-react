//for(초기식; 조건식; 증감식){
//  console.log("반복!")
//}

for(let idx=0; idx < 5; idx++){
  console.log("idx")  //=> 0,1,2,3,4
}

//초기식 : 변수(count변수) = > idx가 총 몇번 실행되었는지 저장 그래서 초기값으로 0을 설정
//조건식 : 반복문이 언제까지 반복할껀지 설정하는 식// 참일 때에만 반복,거짓이면 종료// 즉, idx가 5미만이면 종료됨
//증감식 : idx를 증가시킬 떄 사용됨


for(let idx=1; idx < 5; idx++){
  console.log("idx")  //=> 0,1,2,3,4

  if(idx >=5){
    break;           //1,2,3,4,5가 출력되고 break가 걸려서 반복이 종료됨
    //조건식이 아니더라도 강제로 종료해야할 때 조건문과 함께 break를 사용
  }

}

for(let idx=1; idx <=10; idx++){
  if(idx % 2 ===0) //2로나누어떨어진다면
    continue;   //1이 였다가 2가 되었을 때 조건식이 참이여서 continue를 만나면 if문 실행되지 않고 빠져나감

}
console.log("idx")  
if(idx >=5){
  break;
}
}