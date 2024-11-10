import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  /* background-color: #0a192f; */
  overflow: hidden;
  top:0;
`;

const Star = styled.span`
  position: absolute;
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: var(--basic-yellow);
  border-radius: 50%;
  left: ${props => props.left};
  top: ${props => props.top};
  box-shadow: 0 0 10px var(--basic-yellow), 0 0 20px var(--basic-yellow), 0 0 30px var(--basic-yellow);
  animation: ${twinkle} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const TwinklingStars = ({ count = 50 }) => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        size: Math.random() * 3 + 1
      }));
    };
    
    setStars(generateStars());
  }, [count]);
  
  return (
    <Container>
      {stars.map((star) => (
        <Star
          key={star.id}
          left={star.left}
          top={star.top}
          delay={star.delay}
          size={star.size}
        />
      ))}
    </Container>
  );
};

export default TwinklingStars;