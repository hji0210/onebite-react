function add10(num){


const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor

  setTimeout(() => {


    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
  // reject 호출 시 promise의 비동기 작업이 실패, resolve를 호출하게 되면 promise의 비동기 작업이 성공하게 되는 것
});
  return promise;
}

 add10(0)
.then((result) =>{
  console.log(result);
  return add10(result);
})
.then((result) => {
    console.log(result);
    return add10(result);
})
.then((result) =>{
  console.log(result);
 });


