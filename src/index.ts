interface Human{
  name:string;
  age:number;
  gender:string;
}
//interface 키워드를 통해 정의

const person={
  name:"YY",
  age:22,
  gender:"male"
};

const sayHi=(person:Human): string=>{
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}  `;
};

console.log(sayHi(person))


export{};