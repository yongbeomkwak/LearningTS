interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

type shoppingItem = Pick<Product, "id" | "name" | "price">;

// 상품의 상세정보 (Product의 일부 속성만 가져온다)
function displayProductDetail(shoppingItem: shoppingItem) {
  // id, name, price의 일부만 사용 or 별도의 속성이 추가되는 경우가 있음
  // 인터페이스의 모양이 달라질 수 있음
}

// 3. Partial - 상품의 정보를 업데이트 (put) 함수 -> id, name 등등 어떤 것이든 인자로 들어올수있다
// 인자에 type으로 Product를 넣으면 모든 정보를 다 넣어야함
// 그게 싫으면
interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}
// 위와 같이 정의한다.
// 그러나 같은 인터페이스를 또 정의하는 멍청한 짓을 피하기 위해서 우리는 Partial을 쓴다.
function updateProductItem(prodictItem: Partial<Product>) {
  // Partial<Product>이 타입은 UpdateProduct 타입과 동일하다
}
