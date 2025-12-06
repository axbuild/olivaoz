import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Circle, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const PizzaModel = () => {
  const groupRef = useRef<THREE.Group>(null!);

  // Simple rotation animation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = 0.4; // Tilt it a bit
    }
  });

  // Pepperoni positions
  const pepperoniPositions = [
    [0, 0.1, 0],
    [0.5, 0.1, 0.5],
    [-0.5, 0.1, -0.5],
    [0.6, 0.1, -0.2],
    [-0.4, 0.1, 0.3],
    [0.2, 0.1, -0.7],
    [-0.7, 0.1, 0.1],
  ];

  return (
    <group ref={groupRef} dispose={null}>
      {/* Crust */}
      <Cylinder args={[1.1, 1.1, 0.1, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#D2B48C" />
      </Cylinder>
      {/* Cheese */}
      <Circle args={[1, 64]} rotation-x={-Math.PI / 2} position={[0, 0.06, 0]}>
        <meshStandardMaterial color="#F7E7B0" side={THREE.DoubleSide} />
      </Circle>
      {/* Sauce */}
      <Circle args={[1.05, 64]} rotation-x={-Math.PI / 2} position={[0, 0.055, 0]}>
        <meshStandardMaterial color="#BF3A3A" side={THREE.DoubleSide} />
      </Circle>
      {/* Pepperonis */}
      {pepperoniPositions.map((pos, i) => (
         <Cylinder key={i} args={[0.15, 0.15, 0.02, 32]} position={[pos[0], pos[1], pos[2]]} rotation-x={-Math.PI / 2}>
            <meshStandardMaterial color="#C43434" />
        </Cylinder>
      ))}
    </group>
  );
};

const ThreePizza = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-3, 5, -3]} intensity={0.5} color="orange" />
      <PizzaModel />
    </Canvas>
  );
};

export default ThreePizza;
