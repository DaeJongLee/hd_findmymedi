import React, { useState } from 'react';
import { Search, Info } from 'lucide-react';

const UpdatedPharmacyLayout = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`검색어 "${searchTerm}"에 대한 검색 실행`);
  };

  // 구역 설명 데이터
  const sectionDescriptions = {
    LA: '좌측 하단 구역',
    LB: '좌측 중단 구역',
    LC: '좌측 상단 구역',
    MA: '중앙 상단 구역',
    MB: '중앙 하단 구역',
    RA: '우측 상단 구역',
    RB: '우측 중단 구역',
    RC: '우측 하단 구역',
    INS: '인스턴트 구역',
    N: '번호 매겨진 구역',
  };

  const renderPharmacyLayout = () => (
    <div className="grid grid-cols-5 gap-1 w-full max-w-lg mx-auto">
      {/* 첫 번째 행 */}
      <div className="col-span-2"></div>
      <button onClick={() => handleSectionClick('MA')} className="p-2 bg-green-100 hover:bg-green-200">MA</button>
      <button onClick={() => handleSectionClick('MB')} className="p-2 bg-green-100 hover:bg-green-200">MB</button>
      <div></div>
      
      {/* 두 번째 행 */}
      <button onClick={() => handleSectionClick('LC')} className="p-2 bg-blue-100 hover:bg-blue-200">LC</button>
      <div></div>
      <div></div>
      <div></div>
      <button onClick={() => handleSectionClick('RA')} className="p-2 bg-red-100 hover:bg-red-200">RA</button>
      
      {/* 세 번째 행 */}
      <button onClick={() => handleSectionClick('LB')} className="p-2 bg-blue-100 hover:bg-blue-200">LB</button>
      <button onClick={() => handleSectionClick('INS')} className="p-2 bg-yellow-100 hover:bg-yellow-200">INS</button>
      <div></div>
      <div></div>
      <button onClick={() => handleSectionClick('RB')} className="p-2 bg-red-100 hover:bg-red-200">RB</button>
      
      {/* 네 번째 행 */}
      <button onClick={() => handleSectionClick('LA')} className="p-2 bg-blue-100 hover:bg-blue-200">LA</button>
      <div></div>
      <div></div>
      <div></div>
      <button onClick={() => handleSectionClick('RC')} className="p-2 bg-red-100 hover:bg-red-200">RC</button>
      
      {/* 다섯 번째 행 (숫자 구역) */}
      <div></div>
      <div></div>
      {[1, 2, 3].map(num => (
        <button key={num} onClick={() => handleSectionClick(`N${num}`)} className="p-2 bg-purple-100 hover:bg-purple-200">{num}</button>
      ))}
      
      {/* 여섯 번째 행 */}
      <div></div>
      <div></div>
      {[4, 5, 6].map(num => (
        <button key={num} onClick={() => handleSectionClick(`N${num}`)} className="p-2 bg-purple-100 hover:bg-purple-200">{num}</button>
      ))}
      
      {/* 일곱 번째 행 */}
      <div></div>
      <div></div>
      {[7, 8, 9].map(num => (
        <button key={num} onClick={() => handleSectionClick(`N${num}`)} className="p-2 bg-purple-100 hover:bg-purple-200">{num}</button>
      ))}
      
      {/* 여덟 번째 행 */}
      <div></div>
      <div></div>
      <div></div>
      <button onClick={() => handleSectionClick('N0')} className="p-2 bg-purple-100 hover:bg-purple-200">0</button>
      <div></div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">수정된 조제실 레이아웃</h1>
      
      {/* 검색 기능 */}
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
      
      {/* 조제실 레이아웃 */}
      {renderPharmacyLayout()}
      
      {/* 선택된 섹션 정보 표시 */}
      {selectedSection && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-semibold flex items-center">
            <Info className="mr-2" />
            {selectedSection} 정보
          </h3>
          <p className="mt-2">
            {sectionDescriptions[selectedSection] || 
             (selectedSection.startsWith('N') ? `번호 매겨진 구역 ${selectedSection.slice(1)}` : '추가 정보가 필요합니다.')}
          </p>
          {/* 여기에 선택된 섹션의 약품 목록 등을 표시할 수 있습니다 */}
        </div>
      )}
    </div>
  );
};

export default UpdatedPharmacyLayout;