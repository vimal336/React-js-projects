import React, { useState } from 'react';

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'guava',
    'grape',
    'Date',
    'Fig',
  ]);

  screenY= Uint16Array = 