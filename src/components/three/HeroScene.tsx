"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// 3D Sculpture Component
function KineticSculpture({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate background floating particles
  const particleCount = 70;
  const [positions] = useState(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return pos;
  });

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointerX = state.pointer.x * 0.45;
    const pointerY = state.pointer.y * 0.35;

    if (groupRef.current) {
      // Smooth lerp to mouse pointer + scroll reaction
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointerX + time * 0.25 + scrollProgress * 1.5,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointerY + Math.sin(time * 0.5) * 0.15 + scrollProgress * 0.8,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        Math.sin(time * 1.2) * 0.2 - scrollProgress * 1.5,
        0.05
      );
    }

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.z += delta * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = -time * 0.5;
      ringRef.current.rotation.y = time * 0.3;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * 0.25;
      outerRingRef.current.rotation.x = time * 0.15;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Floating Particles Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#CCFF00"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Main Liquid Chrome Sculpture (Torus Knot) */}
      <mesh ref={meshRef} scale={1.25} castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.34, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#F0F4F8"
          roughness={0.12}
          metalness={0.94}
          envMapIntensity={1.8}
        />
      </mesh>

      {/* Inner Electric-Lime Ring */}
      <mesh ref={ringRef} scale={1.85}>
        <torusGeometry args={[1.25, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#CCFF00"
          emissive="#CCFF00"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>

      {/* Outer Slanted Gyroscopic Ring */}
      <mesh ref={outerRingRef} scale={2.4}>
        <torusGeometry args={[1.1, 0.012, 16, 64]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.3}
          metalness={0.9}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Floating Geometric Satellite Nodes */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.2}>
        <mesh position={[2.2, 1.2, -0.5]} scale={0.22}>
          <octahedronGeometry />
          <meshStandardMaterial
            color="#CCFF00"
            emissive="#CCFF00"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1.8} floatIntensity={1.5}>
        <mesh position={[-2.4, -1.0, 0.4]} scale={0.18}>
          <icosahedronGeometry />
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.15}
            metalness={0.95}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.0}>
        <mesh position={[1.8, -1.5, 0.8]} scale={0.14}>
          <tetrahedronGeometry />
          <meshStandardMaterial
            color="#CCFF00"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Studio Lighting
function StudioLighting() {
  return (
    <>
      <ambientLight intensity={0.65} />
      {/* Key Warm Light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={2.2}
        color="#FFFBF5"
      />
      {/* Electric Lime Accent Rim Light */}
      <pointLight
        position={[-6, -4, 3]}
        intensity={3.8}
        color="#CCFF00"
        distance={18}
      />
      {/* Secondary Cool Rim Light */}
      <pointLight
        position={[6, -3, -4]}
        intensity={2.0}
        color="#00E5FF"
        distance={15}
      />
      {/* Deep fill shadow light */}
      <directionalLight
        position={[0, -6, 2]}
        intensity={0.5}
        color="#101115"
      />
    </>
  );
}

// CSS Fallback if WebGL isn't supported
function CSSFallbackSculpture() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative h-64 w-64 md:h-80 md:w-80">
        <div className="absolute inset-0 rounded-full border border-lime/40 animate-spin-slow" />
        <div className="absolute inset-4 rounded-full border border-white/20 animate-pulse-slow" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-lime/20 via-white/10 to-transparent blur-xl" />
        <div className="absolute inset-16 flex items-center justify-center rounded-full bg-gradient-to-br from-obsidian-card via-obsidian-elevated to-obsidian border border-lime/50 shadow-lime-glow">
          <div className="h-12 w-12 rounded-full border-2 border-lime animate-ping" />
        </div>
      </div>
    </div>
  );
}

export default function HeroScene() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollProgress(Math.min(scrollY / windowHeight, 1.5));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasWebGL) {
    return <CSSFallbackSculpture />;
  }

  return (
    <div
      className="relative h-full w-full select-none"
      data-cursor="hover"
      data-cursor-text="ORBIT"
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <StudioLighting />
          <KineticSculpture scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
