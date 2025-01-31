import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const HeroCanvas = () => {
  const starsRef = useRef();

  useFrame(() => {
    starsRef.current.rotation.y += 0.0004;
    starsRef.current.rotation.x += 0.0002;
  });

  return (
    <>
      <color attach="background" args={['#0F172A']} />
      <Stars
        ref={starsRef}
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default HeroCanvas;
