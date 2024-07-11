import React from 'react';

function ProductList({ products, onEdit, onDelete }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          {product.name} - {product.location}
          <button onClick={() => onEdit(product)}>수정</button>
          <button onClick={() => onDelete(product.name)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;