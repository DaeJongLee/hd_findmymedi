import React, { useState } from 'react';
import { Search, Info } from 'lucide-react';

const CompoundingAreaLayout = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`검색어 "${searchTerm}"에 대한 검색 실행`);
  };

  const sections = ['LA', 'LB', 'LC', 'MA', 'MB', 'RA', 'RB', 'RC', 'INS', 'N (0-9)'];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">조제실 영역 레이아웃</h1>
      
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
        {sections.map(section => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className="p-4 bg-blue-200 hover:bg-blue-300 rounded text-lg font-bold"
          >
            {section}
          </button>
        ))}
      </div>
      
      {selectedSection && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-semibold flex items-center">
            <Info className="mr-2" />
            {selectedSection} 정보
          </h3>
          <p className="mt-2">선택된 조제실 섹션: {selectedSection}</p>
        </div>
      )}
    </div>
  );
};

export default CompoundingAreaLayout;