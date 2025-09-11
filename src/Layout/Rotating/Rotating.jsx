import React, { useState, useEffect } from 'react';
import './Rotating.css';

const words = [
  'elektrik avtomobillər',
  'hibrid avtomobillər',
  'avtomobillər',
  'modellər',
  'sərfəli təkliflər'
];

const Rotating = ({ interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(wordInterval);
  }, [interval]);

  return (
    <h1 className="rotating-h1">
      Ən yaxşı&nbsp;
      <span key={index} className="animated-word">
        {words[index]}
      </span>
    </h1>
  );
};

export default Rotating;
