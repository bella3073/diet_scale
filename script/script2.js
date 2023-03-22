//원시데이터(논리형 데이터 true(1), false(0))
let a = false
let b = 1
console.log(a==b)
//원시데이터(null(빔), undefined(정의되지않음))
let c = 10 //선언o 대입o
let d //선언o 대입x
c = null //대입된 후 특정상황에 따라 값을 제거할 경우
console.log(c) //null
console.log(d) //undefined
//-------------------------
let e = 10
let f = '0'
console.log(e+f)
console.log('-----------------------------------')
//산술연산자 (변경되지 않으면 const, 변경되면 let)
let num1 = 10+06
let num2 = 4-18
let num3 = 3*11
let num4 = 6/2
let num5 = 10%3
console.log(num1, num2, num3, num4, num5)
console.log('-----------------------------------')
let box1 = 1
// box1 = box1+10 //(기존값을 유지하며 새로운 값을 더하고 싶다)
box1 += 10
console.log(box1) //11
console.log('-----------------------------------')
let box2 = 0 //초기값 선언
box2 = box2+10 //box2 += 10
console.log(box2) //10

box2 = box2-5 //box2 -= 5
console.log(box2) //5

box2 = box2*2 //box *= 2
console.log(box2) //10
box2 += '살 입니다.'
// window.alert(box2)
console.log('-----------------------------------')
let box3 = 10
console.log(box3)
let box4 = box3++
console.log(box4, box3)
// console.log(box3++) //후위연산
// console.log(++box3) //전위연산