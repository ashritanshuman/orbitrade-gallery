import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface ProductViewerProps {
  color: string;
  type: string;
}

function ProductModel({ color, type }: ProductViewerProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'wearable':
        return <torusGeometry args={[0.6, 0.2, 16, 32]} />;
      case 'clothing':
        return <coneGeometry args={[0.6, 1.2, 4]} />;
      case 'mineral':
        return <octahedronGeometry args={[0.7, 0]} />;
      case 'footwear':
        return <capsuleGeometry args={[0.3, 0.8, 4, 8]} />;
      case 'gadget':
        return <dodecahedronGeometry args={[0.7, 0]} />;
      case 'consumable':
      default:
        return <sphereGeometry args={[0.6, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export const ProductViewer = ({ color, type }: ProductViewerProps) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color={color} />
        
        <ProductModel color={color} type={type} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={4}
        />
      </Canvas>
    </div>
  );
};
