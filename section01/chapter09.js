// 1. if 조건문
let num  = 10;

if(num >=10) {
//console.log("num은 10 이상입니다")
//console.log("조건이 참 입니다")

} 
else if (num >=5){
  //console.log("num은 5 이상입니다")   //else if는 조건의 제한이 없다.
}

else if (num >=3){
  //console.log("num은 3 이상입니다")   //else if는 조건의 제한이 없다.
}
 else {
  //console.log("조건이 거짓 입니다")
 }

 //if 조건문은 무조건 if로 시작해서 else로 끝나야한다. or if로 시작해서 else if로 끝내야한다.

 // 2. Switch문
 // - > if문과 기능 자체는 동일
 // - > 다수의 조건을 처리할 떄 if보다 더 직관적이다.
// {}안에 있는 변수의 값과 일치하는 값을 위에서부터 아래로 차례대로 탐색을 하다가 일치하는 case문을 만나면 모든 코드 다 수행, break를 쓰면 고양이만 출력됨
 let animal = "cat";

 switch (animal){
  case  "cat":{
    console.log("고양이")
    break;
  }
  case  "dog":{
      console.log("강아지")
      break;
    }
  case  "bear":{
    console.log("곰")
    break;
  }
  case  "snake":{
    console.log("뱀")
    break;
  }
  case  "tiger":{
    console.log("호랑이")
    break;
  }
  // let animal = "eqw";라서 조건에 맞는 게 없으면
 default: {
  console.log("그런 동물은 전 모릅니다");
 }
 }

 //어떠한 변수의 값을 기준으로 각각 다른코드를 실행시키고 싶을 떄 = > switch
 //복잡한 여러개의 조건을 이용 = > if