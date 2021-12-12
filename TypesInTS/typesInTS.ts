/*
string
number
boolean
null
undefined
bight
[]
{}
*/

let stringArray:string[]=["Calm","Gouldo"];
console.log(stringArray)

let obj :{name?:String} ={name:"Calm"};
// obj의 타입은 object이며 name 속성을 string으로 갖는다
//단 ? 를 붙혔으므로 필수는 아니다.
//ts에서는 변수 뒤에 붙 옵션을 붙혀준다
console.log(obj)

type sNumber = string|number
//type 키워드를 사용하여 type alias가 가능하다(별명)
//string or number 둘다 가능

let sno:sNumber="123" //string
let sno2:sNumber=123 //number

console.log(sno,sno2)

type Member=[number,boolean];
//첫번째는 number 2번째는 boolean이 꼭 와야함

let m1:Member=[123,true]

//만약 object 속성들이 많다면

type Member2={
    [key:string] :string, //[key:string](오브젝트 속성 중 모든 문자열 속성)의 타입은 string이다   
}

//name과 age가 문자열이므로 해당 값은 string으로 지정해야함
let john:Member2={name:"john",age:'123'};



