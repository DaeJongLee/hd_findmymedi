import React, { useState } from 'react';
import { Search, Info } from 'lucide-react';

const SalesAreaLayout = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCellClick = (cellContent, rowIndex, colIndex) => {
    setSelectedCell({ content: cellContent, row: rowIndex, col: colIndex });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`검색어 "${searchTerm}"에 대한 검색 실행`);
  };

  const layout = [
    [null, '냉장고', null, null, null, null, 'A밑서랍', 'A'],
    ['온장고', 'Red-B', '1', null, null, null, 'B밑서랍', 'B'],
    [null, 'Red-A', '1', '2', null, null, 'C밑서랍', 'C'],
    [null, null, '3', '4', null, null, 'D밑서랍', 'D'],
    [null, null, '5', '6', null, null, 'E밑서랍', 'E'],
    ['컴퓨터', 'Blue-B', null, null, null, null, 'F밑서랍', 'F'],
    [null, 'Blue-A', '1', '2', '3', null, 'G밑서랍', 'G'],
    [null, null, null, null, null, null, 'H밑서랍', 'H'],
    [null, 'Green-', '1', '2', '3', null, null, null],
    [null, null, '4', '5', '6', null, null, null],
    [null, null, '7', '8', '9', null, null, null]
  ];

  const getCellColor = (content) => {
    if (content && content.includes('Red')) return 'bg-red-200 hover:bg-red-300';
    if (content && content.includes('Blue')) return 'bg-blue-200 hover:bg-blue-300';
    if (content && content.includes('Green')) return 'bg-green-200 hover:bg-green-300';
    if (content && ['냉장고', '온장고', '컴퓨터'].includes(content)) return 'bg-gray-200 hover:bg-gray-300';
    if (content && content.includes('서랍')) return 'bg-yellow-200 hover:bg-yellow-300';
    if (content && ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(content)) return 'bg-purple-200 hover:bg-purple-300';
    return content ? 'bg-white hover:bg-gray-100' : 'bg-gray-100';
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">판매위치 영역 상세 레이아웃</h1>
      
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="약품 검색..."
            className="flex-grow p-2 border rounded-l"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
            <Search size={20} />
          </button>
        </div>
      </form>
      
      <div className="grid grid-cols-8 gap-1 mb-4">
        {layout.map((row, rowIndex) => 
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className={`p-2 text-sm font-semibold ${getCellColor(cell)} ${cell ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => cell && handleCellClick(cell, rowIndex, colIndex)}
            >
              {cell || ''}
            </button>
          ))
        )}
      </div>
      
      {selectedCell && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-semibold flex items-center">
            <Info className="mr-2" />
            선택된 영역 정보
          </h3>
          <p className="mt-2">
            내용: {selectedCell.content}<br />
            위치: {selectedCell.row + 1}행 {selectedCell.col + 1}열
          </p>
        </div>
      )}
    </div>
  );
};

export default SalesAreaLayout;