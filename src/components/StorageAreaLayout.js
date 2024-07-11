import React, { useState } from 'react';
import { Search, Info } from 'lucide-react';

const StorageAreaLayout = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`검색어 "${searchTerm}"에 대한 검색 실행`);
  };

  const sectionDescriptions = {
    SL: '집하장 좌측 구역',
    SM: '집하장 중앙 구역',
    SR: '집하장 우측 구역',
    SS: '집하장 특수 보관 구역'
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">집하장 영역 레이아웃</h1>
      
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
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <button
          onClick={() => handleSectionClick('SL')}
          className="p-8 bg-yellow-200 hover:bg-yellow-300 rounded text-xl font-bold"
        >
          SL
        </button>
        <button
          onClick={() => handleSectionClick('SM')}
          className="p-8 bg-green-200 hover:bg-green-300 rounded text-xl font-bold"
        >
          SM
        </button>
        <button
          onClick={() => handleSectionClick('SR')}
          className="p-8 bg-red-200 hover:bg-red-300 rounded text-xl font-bold"
        >
          SR
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <button
          onClick={() => handleSectionClick('SS')}
          className="p-8 bg-blue-200 hover:bg-blue-300 rounded text-xl font-bold col-span-1"
        >
          SS
        </button>
        <div></div>
      </div>
      
      {selectedSection && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-semibold flex items-center">
            <Info className="mr-2" />
            {selectedSection} 정보
          </h3>
          <p className="mt-2">{sectionDescriptions[selectedSection]}</p>
        </div>
      )}
    </div>
  );
};

export default StorageAreaLayout;