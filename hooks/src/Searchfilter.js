import React, { useState } from 'react';


const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape',
    'Honeydew',
  ];