import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const shapeImages = [
  '/shape2.png',
  '/shape5.png',
  '/shape14.png',
  '/shape22.png',
  '/shape28.png',
];

const getRandomPosition = () => ({
  top: `${Math.floor(Math.random() * 80)}%`,
  left: `${Math.floor(Math.random() * 80)}%`,
});

const FloatingShapes = () => {
  const [positions, setPositions] = useState(
    shapeImages.map(() => getRandomPosition())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(shapeImages.map(() => getRandomPosition()));
    }, 3000); // כל 3 שניות

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {shapeImages.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`shape-${index}`}
          sx={{
            position: 'absolute',
            width: 100,
            height: 100,
            transition: 'all 3s ease',
            pointerEvents: 'none',
            zIndex: 0,
            ...positions[index],
          }}
        />
      ))}
    </>
  );
};

export default FloatingShapes;
