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