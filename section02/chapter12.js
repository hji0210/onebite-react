console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);
//webAPTS의 어떠한 영역에 setTimeout를 대신 실행해달라고 위탁하면서 콜백함수도 같이 넘겨줌


console.log(3);
//1과 3이 출력되고 3초가 지나면 callback함수가 실행되어서 2가 뒤늦게 출력
//setTimeout은 비동기적으로 코드가 실행되도록 설정해줄 수 있음