//function add(a, b, callback) {
 //setTimeout(() => {
  //const sum = a+b;//3
  //callback(sum)
  //console.log("안녕하세요!");
//}, 3000);
//}

//add(1, 2, (value) => {
 // console.log(value);//3
//});


//음식을 주문하는 상황
function orderFood(callback){
  setTimeout(() => {
    const food = "떡볶이";
callback(food);

  }, 3000);
}

function cooldownFood(food, callback){
  setTimeout(()=> {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  },2000)
}


function frezzeFood(food, callback){
  setTimeout(()=> {
      const frezzeFood = `냉동된 ${food}`;
      callback(frezzeFood)
  }, 1500);
}




orderFood((food)=>{
  console.log(food);//떡볶이

  cooldownFood(food, (cooldownFood)=>{
    console.log(cooldownedFood);


    frezzeFood(cooldownFood, (frezzeFood) => {
      console.log(frezzeFood);

    })
  });
  });





