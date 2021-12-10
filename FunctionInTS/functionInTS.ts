const sayHi=(name:string,age:number,gender:string): string=>{
    return `Hello ${name}, you are ${age}, you are a ${gender}  `;
  };
  //변수로 선언 방법 (param1:type...) :return type =>{내용}
  
  function sayHi2(name:string,age:number,gender:string): string
  {
    return `Hello ${name}, you are ${age}, you are a ${gender}  `;
  }
  //function keyword 이용
  //function 함수명(param1:type): return type {return }
  console.log(sayHi("Nicolas",17,"male"))
  console.log(sayHi2("YB",26,"male"))
  
  export{};