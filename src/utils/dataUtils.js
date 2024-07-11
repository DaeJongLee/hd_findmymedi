// 데이터 로딩 함수
export const loadData = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('데이터 로딩 중 오류 발생:', error);
      return null;
    }
  };
  
  // 제품 검색 함수
  export const searchProducts = (products, searchTerm) => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  // 위치별 제품 검색 함수
  export const getProductsByLocation = (locations, locationName) => {
    return locations[locationName] || [];
  };
  
  // 새 제품 추가 함수
  export const addProduct = (data, newProduct) => {
    data.products.push(newProduct);
    if (!data.locations[newProduct.location]) {
      data.locations[newProduct.location] = [];
    }
    data.locations[newProduct.location].push(newProduct.name);
    return data;
  };
  
  // 제품 업데이트 함수
  export const updateProduct = (data, updatedProduct) => {
    const index = data.products.findIndex(p => p.name === updatedProduct.name);
    if (index !== -1) {
      const oldLocation = data.products[index].location;
      data.products[index] = updatedProduct;
      
      // 위치가 변경된 경우 locations 객체 업데이트
      if (oldLocation !== updatedProduct.location) {
        data.locations[oldLocation] = data.locations[oldLocation].filter(name => name !== updatedProduct.name);
        if (!data.locations[updatedProduct.location]) {
          data.locations[updatedProduct.location] = [];
        }
        data.locations[updatedProduct.location].push(updatedProduct.name);
      }
    }
    return data;
  };
  
  // 제품 삭제 함수
  export const deleteProduct = (data, productName) => {
    const index = data.products.findIndex(p => p.name === productName);
    if (index !== -1) {
      const location = data.products[index].location;
      data.products.splice(index, 1);
      data.locations[location] = data.locations[location].filter(name => name !== productName);
    }
    return data;
  };