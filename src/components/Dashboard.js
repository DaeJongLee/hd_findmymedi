import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Package, MapPin, BarChart } from 'lucide-react';

const mockInventoryData = [
  { id: 1, name: '네오무릎보호대 좌우겸용', manufacturer: '헬스메이트', stock: 10, location: 'DPA/SL' },
  { id: 2, name: '파워포텐*5포', manufacturer: '미등록제조사', stock: 5, location: 'SM' },
  { id: 3, name: '액티넘EX 골드 90T', manufacturer: '미등록제조사', stock: 15, location: 'DPB' },
  { id: 4, name: '한풍 숙취엔', manufacturer: '미등록제조사', stock: 8, location: 'SR' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`검색어 "${searchTerm}"로 검색을 수행합니다.`);
  };

  const renderInventoryManagement = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">재고 관리</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">상품명</th>
            <th className="py-2 px-4 border">제조사</th>
            <th className="py-2 px-4 border">재고</th>
            <th className="py-2 px-4 border">위치</th>
          </tr>
        </thead>
        <tbody>
          {mockInventoryData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border">{item.manufacturer}</td>
              <td className="py-2 px-4 border">{item.stock}</td>
              <td className="py-2 px-4 border">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderLocationManagement = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">위치 관리</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/sales" className="p-4 bg-blue-100 rounded hover:bg-blue-200">
          <h3 className="font-bold">판매위치 영역</h3>
          <p>판매장소 상세 레이아웃 보기</p>
        </Link>
        <Link to="/storage" className="p-4 bg-green-100 rounded hover:bg-green-200">
          <h3 className="font-bold">집하장 영역</h3>
          <p>집하장 레이아웃 보기</p>
        </Link>
        <Link to="/compounding" className="p-4 bg-yellow-100 rounded hover:bg-yellow-200">
          <h3 className="font-bold">조제실 영역</h3>
          <p>조제실 레이아웃 보기</p>
        </Link>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">대시보드</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-100 p-4 rounded">
          <h3 className="font-bold mb-2">총 재고 항목</h3>
          <p className="text-2xl">{mockInventoryData.length}</p>
        </div>
        <div className="bg-orange-100 p-4 rounded">
          <h3 className="font-bold mb-2">총 재고 수량</h3>
          <p className="text-2xl">{mockInventoryData.reduce((sum, item) => sum + item.stock, 0)}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">약국 재고 관리 시스템</h1>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="상품명 또는 바코드로 검색..."
            className="flex-grow p-2 border rounded-l"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
            <Search size={20} />
          </button>
        </div>
      </form>
      
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          <BarChart size={20} className="inline-block mr-2" />
          대시보드
        </button>
        <button
          onClick={() => setActiveTab('inventory')}
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'inventory' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          <Package size={20} className="inline-block mr-2" />
          재고 관리
        </button>
        <button
          onClick={() => setActiveTab('location')}
          className={`px-4 py-2 rounded ${activeTab === 'location' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          <MapPin size={20} className="inline-block mr-2" />
          위치 관리
        </button>
      </div>
      
      <div className="bg-white p-4 rounded shadow">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'inventory' && renderInventoryManagement()}
        {activeTab === 'location' && renderLocationManagement()}
      </div>
    </div>
  );
};

export default Dashboard;