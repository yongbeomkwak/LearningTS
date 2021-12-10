class Human {
    public name: string;
    private age: number;
    protected gender: string;
    //접근 제한자, public,private,protected(상속관련)

    constructor(name: string, age: number, gender?: string) //생성자
    //여기서 gender 변수는  not mandatory ,그러므로 ?기호 사용
    //주의할 점은 type 뒤가 아닌 변수명 뒤에
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    //멤버 함수 정의
    getAge(): number {
        return this.age;
    }

    getGender(): string {
        return this.gender;
    }
}
//interface 키워드를 통해 정의

const sayHi = (person: Human): string => {
    return `Hello ${
        person.name
    } \t  ${person.getAge()} \t ${person.getGender()}`;
    //문자열 안에 변수 접근  `` ${}
};

const person1 = new Human("Lion", 12);
//인스턴스 객체 생성
const person2 = new Human("Tiger", 23, "male");

console.log(sayHi(person1));
console.log(sayHi(person2));

export {};
