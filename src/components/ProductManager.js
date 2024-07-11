import React, { useState, useEffect } from 'react';
import { loadData, searchProducts, getProductsByLocation, addProduct, updateProduct, deleteProduct } from '../utils/dataUtils';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function ProductManager() {
  const [data, setData] = useState({ products: [], locations: {} });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await loadData();
      if (result) {
        setData(result);
        setFilteredProducts(result.products);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const results = searchProducts(data.products, searchTerm);
    setFilteredProducts(results);
  };

  const handleLocationSelect = (location) => {
    const products = getProductsByLocation(data.locations, location);
    setFilteredProducts(products.map(name => ({ name, location })));
  };

  const handleAddProduct = (newProduct) => {
    const updatedData = addProduct(data, newProduct);
    setData(updatedData);
    setFilteredProducts(updatedData.products);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedData = updateProduct(data, updatedProduct);
    setData(updatedData);
    setFilteredProducts(updatedData.products);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (productName) => {
    const updatedData = deleteProduct(data, productName);
    setData(updatedData);
    setFilteredProducts(updatedData.products);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">약국 제품 관리</h1>
      <SearchBar onSearch={handleSearch} />
      <select 
        onChange={(e) => handleLocationSelect(e.target.value)}
        className="mt-4 p-2 border rounded"
      >
        <option value="">위치 선택</option>
        {Object.keys(data.locations).map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      <ProductList 
        products={filteredProducts} 
        onEdit={setSelectedProduct}
        onDelete={handleDeleteProduct}
      />
      <ProductForm
        product={selectedProduct}
        onSubmit={selectedProduct ? handleUpdateProduct : handleAddProduct}
        onCancel={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default ProductManager;