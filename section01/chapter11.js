//함수선언 = > 함수가 선언되었을때 어떤 코드를 실핼할지 미리 준비해두는 작업 

function greeting() {
 console.log("안녕하세요!")  //함수는 선언했다고 바로 실행 x , 첫번째실행


}

console.log("호출 전");//두번째실행
greeting();  //함수의 이름을 불러서 호출했을때만 실행됨, 함수호출할 때는 반드시 소괄호를 함께 작성
//함수 호출, 함수가 실행되면 코드 흐름이 함수내부로 넘어가서 함수가 호출되었던 지점으로 넘어가서 
console.log("호출 후"); // 호출 후가 실행됨


function getArea (width, height) {  ////전달된 인수들을 순서대로 저장하는 특수한 함수의 변ㅅ규 = > 매개변수
 //let width = 10;
 //let height = 10;
 function another(){ //중첩함수
  console.log("another");
 }

another();   //getArea함수가 호출될 때마다 another라는 함수를 내부적으로 호출해서 console에 another가 계속 출력됨

//함수내부에 또 다른 함수를 만들 수 있다.


 let area = width * height;

 //console.log(area);
 return area; //반환값 = > 함수 호출의 결과값, return문은 함수가 어떤 결과값을 반환하도록 만들어줄 수 있다., 값 반환하고 바로 종료됨
 console.log("hello")//return문 밑에 작성해도 이 코드는 실제로는 수행되지 않는다.

}

getArea(10, 20);//함수를 호출하면서 함수에 전달하는 것 => 인수
getArea(30, 20);//인수의 값을 바꿔가면서 동적으로 함수에 쓸 값을 계속해서 바꿔가면서 넘겨줄 수 있다


let area1 = getArea(10,20);  //반환값을 변수에 담아서 활용 가능  => 결과 : return에 200이 담김 
console.log(area1);

let area2 = getArea(30,20);  //=> 결과 : return에 600이 담김 


//선언문보다 호출문getArea(10, 20);을 아래에 두어도 내부적으로 알아서 호이스팅되어서 끌어올려줘서 실행됨
//호이스팅때문에 함수선언이 무조건 위에 있지 않아도 유연하게 프로그래밍 진행될 수 있음

//test(); // 이 코드가 과연 실행될까..?

//function test() {
 // document.writeln("Hoisting");
//}

test();


// /함수를 할당하는 function test(){...} 코드가 함수를 실행하는 test() 코드 보다 아래에 작성된 경우, 호이스팅 개념 없이 이론적으로 생각해 보면 맨 첫째줄 라인의 test()는 실행되지 않아야한다.
//하지만 JS는 함수를 Hoisting(끌어올려~~!!)하기 때문에 최상단의 test()코드도 정상 작동합니다.