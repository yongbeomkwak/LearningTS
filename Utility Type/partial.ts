/**Partial
*파셜 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있습니다.
#예시1
*/
interface Address {
  email: string;
  address: string;
}

type MyEmail = Partial<Address>;
const me: MyEmail = {}; // 가능
const you: MyEmail = { email: "noh5524@gmail.com" }; // 가능
const all: MyEmail = { email: "noh5524@gmail.com", address: "secho" }; // 가능

//#예시2
interface Address {
  email: string;
  address: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// Partial - 상품의 정보를 업데이트 (put) 함수 -> id, name 등등 어떤 것이든 인자로 들어올수있다
// 인자에 type으로 Product를 넣으면 모든 정보를 다 넣어야함
// 그게 싫으면
interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

// #Partial 구현하기
// 아래 인터페이스를 다른 방법으로 아래와 같이 구현 가능하다
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

type partials = Partial<UserProfile>;
