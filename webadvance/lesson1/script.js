//let a = 9
//let b = 556
//let c = a + b
//console.log("ket qua của " + a + '+' + b + "là:" + c + "ne")

//console.log(`ket qua cua ${a} + ${b} la ${a+b} ne`)

//let a = parseInt(prompt("Nhập a"))
//let b = parseInt(prompt("Nhập b"))

//console.log(`ket qua cua ${a} + ${b} la ${a+b} ne`)


// function getRandomInt(max) {
//      return Math.floor(Math.random() * max);
//  }

//  let a = getRandomInt(100); 
//  let b = getRandomInt(100)
//  let c = parseInt(prompt(`Nhập ket qua cua  ${a} + ${b}`))


//  if (c == (a + b)) {
//      alert("Đúng")
//  } else {
//      alert("Sai")
//  }

// let age = let c = parseInt(prompt(`Nhập tuổi`))
// if( age<20){
//     alert("teen")
// }elseif(age == 20){
//     alert("Ban binh thuong")x
// }elseif(age > 60){
//     alert("Ban gia")
// }else{
//     alert("ban truong thanh")
// }1

// for(let i = 10; i <= 85; i = i+2){
//     console.log( i )
// }

// for(let i = 0; i <= 100; %i = 3 ){
//     console.log( i )
// }

for(let i = 1; i <= 5; i = i+1 ){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
   
    let a = getRandomInt(100); 
    let b = getRandomInt(100)
    let c = parseInt(prompt(`Nhập ket qua cua  ${a} + ${b}`))
   
   
    if (c == (a + b)) {
        alert("Đúng")
    } else {
        alert("Sai")
    }
}
