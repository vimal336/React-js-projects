import React, { useState } from 'react';

const Searchfilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
  ]);

    const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = items.filter((item) => item.name.toLowerCase().includes(term));
    setFilteredItems(filtered);
  };


  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-md shadow-md">
      <input
       type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full p-4 pl-10 text-sm text-red-700 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      />

  )