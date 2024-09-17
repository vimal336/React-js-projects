import React, { useState } from 'react';

import React from 'react'

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape'
  ]);