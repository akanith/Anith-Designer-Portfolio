"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Floating Artwork Frame Component
interface ArtworkFrameProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  aspectRatio: "portrait" | "square" | "landscape";
  imageUrl: string;
  title: string;
  accentColor?: string;
}

function ArtworkFrame({
  position,
  rotation = [0, 0, 0],
  aspectRatio,
  imageUrl,
  title,
  accentColor = "#355CFF",
}: ArtworkFrameProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [hovered, setHovered] = useState(false);

  // Width and height based on aspect ratio
  const width = aspectRatio === "landscape" ? 2.1 : aspectRatio === "portrait" ? 1.35 : 1.4;
  const height = aspectRatio === "landscape" ? 1.3 : aspectRatio === "portrait" ? 1.85 : 1.4;

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      imageUrl,
      (loadedTexture) => {
        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        loadedTexture.minFilter = THREE.LinearFilter;
        setTexture(loadedTexture);
      },
      undefined,
      () => {
        // Fallback on error
      }
    );
  }, [imageUrl]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Smooth lerp on hover
    const targetZ = hovered ? position[2] + 0.45 : position[2];
    const targetScale = hovered ? 1.05 : 1.0;

    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.1);
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
    );
  });

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      {/* Outer Paper Backing Frame */}
      <mesh position={[0, 0, -0.02]} castShadow receiveShadow>
        <boxGeometry args={[width + 0.12, height + 0.12, 0.04]} />
        <meshStandardMaterial
          color={hovered ? accentColor : "#FFFFFF"}
          roughness={0.2}
          metalness={0.05}
        />
      </mesh>

      {/* Artwork Canvas Plane */}
      <mesh position={[0, 0, 0.01]} receiveShadow>
        <planeGeometry args={[width, height]} />
        {texture ? (
          <meshBasicMaterial map={texture} toneMapped={false} />
        ) : (
          <meshStandardMaterial color="#F4F4F0" roughness={0.3} />
        )}
      </mesh>

      {/* Thin Corner Colored Pin / Accent */}
      <mesh position={[width / 2 - 0.08, height / 2 - 0.08, 0.02]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial
          color={accentColor}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
    </group>
  );
}

// Spatial Universe Composition
function SpatialScene({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const pointerX = state.pointer.x * 0.35;
    const pointerY = state.pointer.y * 0.25;

    // Gentle camera orbit and pointer parallax
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointerX * 0.5 + Math.sin(time * 0.3) * 0.04,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointerY * 0.4 + Math.cos(time * 0.25) * 0.03 + scrollProgress * 0.4,
      0.05
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      Math.sin(time * 0.8) * 0.1 - scrollProgress * 1.2,
      0.05
    );
  });

  return (
    <group ref={groupRef} position={[0.2, 0, 0]}>
      {/* 1. Primary Centerpiece Portrait Frame: Messiah Sports Socks */}
      <Float speed={2.0} rotationIntensity={0.2} floatIntensity={0.3}>
        <ArtworkFrame
          position={[-0.4, 0.1, 0.5]}
          rotation={[-0.05, 0.12, -0.02]}
          aspectRatio="portrait"
          imageUrl="/images/projects/messiah-sports/socks-campaign.png"
          title="Messiah Sports Socks"
          accentColor="#355CFF" // Cobalt
        />
      </Float>

      {/* 2. Upper Right Portrait Frame: Ramyas Jeweller Gold Scheme */}
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.35}>
        <ArtworkFrame
          position={[1.5, 0.9, -0.2]}
          rotation={[0.06, -0.15, 0.04]}
          aspectRatio="portrait"
          imageUrl="/images/projects/ramyas-jeweller/diwali-savings-scheme-brochure.png"
          title="Ramyas Jeweller Diwali Savings"
          accentColor="#E7FF59" // Acid Yellow
        />
      </Float>

      {/* 3. Lower Left Landscape Panel: Messiah Sports Spec Board */}
      <Float speed={2.2} rotationIntensity={0.15} floatIntensity={0.25}>
        <ArtworkFrame
          position={[-1.7, -0.9, 0.2]}
          rotation={[0.04, 0.18, 0.03]}
          aspectRatio="landscape"
          imageUrl="/images/projects/messiah-sports/stockings-board.png"
          title="Messiah Sports Tech Board"
          accentColor="#FF5A45" // Electric Coral
        />
      </Float>

      {/* 4. Lower Right Square Frame: Swanzaa Origami Couture */}
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.3}>
        <ArtworkFrame
          position={[1.4, -1.0, 0.3]}
          rotation={[-0.04, -0.1, -0.03]}
          aspectRatio="square"
          imageUrl="/images/projects/swanzaa/emblem-dark.png"
          title="Swanzaa Couture Emblem"
          accentColor="#8B5CF6" // Violet
        />
      </Float>

      {/* 5. Deep Background Frame: Blue Waves FC Crest */}
      <Float speed={1.4} rotationIntensity={0.1} floatIntensity={0.2}>
        <ArtworkFrame
          position={[-0.8, 1.4, -0.8]}
          rotation={[0.08, 0.15, -0.04]}
          aspectRatio="square"
          imageUrl="/images/projects/blue-waves-fc/club-crest.png"
          title="Blue Waves FC Crest"
          accentColor="#355CFF"
        />
      </Float>

      {/* --- Sculptural Colourful Geometric Elements --- */}

      {/* Electric Coral Sphere */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh position={[-1.9, 0.8, 0.6]} castShadow>
          <sphereGeometry args={[0.26, 32, 32]} />
          <meshStandardMaterial
            color="#FF5A45"
            roughness={0.15}
            metalness={0.1}
          />
        </mesh>
      </Float>

      {/* Vivid Cobalt Torus */}
      <Float speed={2.0} rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh position={[0.7, 1.7, -0.3]} rotation={[0.5, 0.3, 0.8]} castShadow>
          <torusGeometry args={[0.32, 0.09, 16, 48]} />
          <meshStandardMaterial
            color="#355CFF"
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      </Float>

      {/* Acid Yellow Cylinder Column */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[2.1, -0.2, 0.1]} rotation={[0.4, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.16, 0.16, 0.55, 32]} />
          <meshStandardMaterial
            color="#E7FF59"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      </Float>

      {/* Vivid Violet Polyhedron */}
      <Float speed={2.8} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-0.3, -1.5, 0.7]} rotation={[0.3, 0.5, 0]} castShadow>
          <octahedronGeometry args={[0.24]} />
          <meshStandardMaterial
            color="#8B5CF6"
            roughness={0.2}
            metalness={0.2}
          />
        </mesh>
      </Float>

      {/* Subtle Pale Blue Floating Ring */}
      <mesh position={[-0.4, 0.1, -0.5]} rotation={[Math.PI / 3, 0, 0.2]}>
        <torusGeometry args={[2.5, 0.015, 16, 64]} />
        <meshBasicMaterial color="#355CFF" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

// Studio Lighting for Warm White Space
function GalleryLighting() {
  return (
    <>
      {/* Soft warm ambient lighting */}
      <ambientLight intensity={1.2} color="#FFFDF7" />

      {/* Key directional sunlight */}
      <directionalLight
        position={[6, 8, 7]}
        intensity={1.8}
        color="#FFFFFF"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Soft fill sky light */}
      <directionalLight
        position={[-6, -4, 4]}
        intensity={0.6}
        color="#E0F2FE"
      />

      {/* Coral and Cobalt color bounce lights */}
      <pointLight position={[-4, 3, 2]} color="#FF5A45" intensity={1.8} distance={10} />
      <pointLight position={[4, -3, 2]} color="#355CFF" intensity={1.8} distance={10} />
    </>
  );
}

// CSS-based graceful fallback if WebGL is unavailable
function CSSFallbackSpatial() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <div className="relative h-72 w-80 rounded-2xl bg-white border border-[#E7E7E0] p-4 shadow-gallery flex flex-col justify-between">
        <div className="flex justify-between items-center text-xs font-mono text-ink-muted">
          <span>SPATIAL GALLERY</span>
          <span className="h-2 w-2 rounded-full bg-accent-cobalt" />
        </div>
        <div className="my-auto text-center font-display text-lg font-bold text-ink">
          Interactive Art Universe
        </div>
        <div className="text-[11px] font-mono text-ink-muted text-center">
          WebGL Hardware Accelerated
        </div>
      </div>
    </div>
  );
}

export default function HeroArtUniverse() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      setScrollProgress(Math.min(scrollY / height, 1.5));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasWebGL) {
    return <CSSFallbackSpatial />;
  }

  return (
    <div
      className="relative h-full w-full select-none cursor-grab active:cursor-grabbing"
      data-cursor="hover"
      data-cursor-text="ORBIT"
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 46 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <GalleryLighting />
          <SpatialScene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
