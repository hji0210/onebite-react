function returnFalse() {
 console.log("False 함수")
 // return false;
 return undefined;
}


function returnTrue(){
  console.log("True 함수");
  //return true;
  return 10;
}

console.log(returnFalse() && returnTrue());
//returnFalse가 false라서 false and 무엇을 하든 그 결과값은 false가 된다.
//그래서 두번째 피연산자값에는 접근조차 할 수 없다.그래서 returnTrue 함수는 호출 자체를 생략한 것

console.log(returnTrue() && returnFalse());
//단락평가가 작동 x
//t and t = t이고
//     f = f이다  그래서 returnTrue가 true인 것 만으로 확정이 나지 x
//그래서 두 번째 피연산자도 호출해봐야함


//&& 연산자는 두 값이 모두 true일 때만 true를 반환합니다.
//첫 번째 값이 false라면, 두 번째 값이 무엇이든 결과는 이미 false입니다. 그래서 두 번째 값을 평가할 필요가 없습니다.
//첫 번째 값이 true라면, 두 번째 값을 평가해야 전체 결과를 알 수 있습니다. 그래서 두 번째 값도 확인합니다.

//단락평가 : and 연산자와 같은 논리연산식에서 첫번째 피연산자값으로도 
// 이 연산의 값을 확정할 수 있다면 두번째 피연산자에는 접근조차 하지 않는 실행방식 
// 연산자에서 앞에 값이 false면 두번째 피연산자는 볼 필요가 없다.


//&& 연산자는 첫 번째 값이 false일 때, 두 번째 값을 평가하지 않습니다. (단락 평가)
//==>두 개의 조건이 모두 참(true)일 때만 전체 결과가 참이 됩니다.
//두 개의 값 중 하나라도 참(true)이면 결과는 참(true)입니다.
//**첫 번째 값이 true**일 때는 전체 결과가 true이므로 두 번째 값을 평가할 필요가 없습니다.
//|| 연산자는 첫 번째 값이 true일 때, 두 번째 값을 평가하지 않습니다. (단락 평가)
//하지만, 첫 번째 값이 true이면 && 연산자는 두 번째 값도 평가해야 합니다.

//단략 평가 활용 사례

function printName(person){
  //if (!person){
   // console.log("person에 값이 없음")
   // return;

  const name = person && person.name;
   //console.log(person && person.name);
   console.log(name || "person의 값이 없음")
  }



 //person가 undefinded이기 때문에 단락평가에 의해서 person.name에 접근 x

printName();//person의 값이 없음
printName({name : "이정환"});//객체값을 전달하면 name변수에 저장되는 값인 person가 truethy해서 person.name이 저장
//  console.log(name || "person의 값이 없음")값이 이정환 or person의 값이 없음로 둘다 truethy해서  첫번째 값인 이정환출력

//t || t =>첫번쨰 값 반환
//t && t => 두번째 값 반환