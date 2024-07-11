import React, { useState, useEffect } from 'react';

function ProductForm({ product, onSubmit, onCancel }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setLocation(product.location);
    } else {
      setName('');
      setLocation('');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, location });
    setName('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="제품명"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="위치"
        required
      />
      <button type="submit">{product ? '수정' : '추가'}</button>
      {product && <button type="button" onClick={onCancel}>취소</button>}
    </form>
  );
}

export default ProductForm;