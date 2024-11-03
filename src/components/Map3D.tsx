import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const StateMap = ({ state, zone, highlightColor = '#ff0000' }) => {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color={zone ? highlightColor : '#ffffff'}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
      <mesh ref={glowRef} scale={1.2}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color={zone ? highlightColor : '#ffffff'}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

interface Map3DProps {
  selectedState?: string;
  selectedZone?: string;
}

export default function Map3D({ selectedState, selectedZone }: Map3DProps) {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <StateMap state={selectedState} zone={selectedZone} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}