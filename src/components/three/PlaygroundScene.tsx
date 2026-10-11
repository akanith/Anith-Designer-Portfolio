"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { RefreshCw } from "lucide-react";

type GeometryShape = "torusKnot" | "icosahedron" | "dodecahedron" | "cylinder";
type MaterialMode = "porcelain" | "coral" | "ink" | "wireframe";
type LightingMood = "gallery" | "coralDawn" | "cobaltStudio";

function PlaygroundMesh({
  shape,
  materialMode,
  speed,
}: {
  shape: GeometryShape;
  materialMode: MaterialMode;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4 * speed;
      meshRef.current.rotation.y += delta * 0.6 * speed;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.5 * speed;
      ringRef.current.rotation.x = time * 0.3 * speed;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={1.4} castShadow receiveShadow>
        {shape === "torusKnot" && <torusKnotGeometry args={[1, 0.32, 100, 24, 2, 5]} />}
        {shape === "icosahedron" && <icosahedronGeometry args={[1.3, 1]} />}
        {shape === "dodecahedron" && <dodecahedronGeometry args={[1.2, 0]} />}
        {shape === "cylinder" && <cylinderGeometry args={[0.9, 0.9, 1.8, 32]} />}

        {materialMode === "porcelain" && (
          <meshStandardMaterial
            color="#FAFAF7"
            metalness={0.1}
            roughness={0.15}
            envMapIntensity={1.5}
          />
        )}
        {materialMode === "coral" && (
          <meshStandardMaterial
            color="#FF5A45"
            emissive="#FF5A45"
            emissiveIntensity={0.25}
            metalness={0.2}
            roughness={0.3}
          />
        )}
        {materialMode === "ink" && (
          <meshPhysicalMaterial
            color="#171717"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        )}
        {materialMode === "wireframe" && (
          <meshStandardMaterial
            color="#355CFF"
            wireframe
            emissive="#355CFF"
            emissiveIntensity={0.6}
          />
        )}
      </mesh>

      {/* Outer Ring */}
      <mesh ref={ringRef} scale={2.2}>
        <torusGeometry args={[1.1, 0.015, 16, 64]} />
        <meshStandardMaterial
          color={materialMode === "coral" ? "#FF5A45" : materialMode === "wireframe" ? "#355CFF" : "#171717"}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

function PlaygroundLights({ mood }: { mood: LightingMood }) {
  if (mood === "coralDawn") {
    return (
      <>
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 5, 4]} color="#FF5A45" intensity={4} distance={15} />
        <pointLight position={[-4, -5, -4]} color="#8B5CF6" intensity={3} distance={15} />
        <directionalLight position={[0, 6, 2]} color="#FFFFFF" intensity={2} />
      </>
    );
  }

  if (mood === "cobaltStudio") {
    return (
      <>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 4, 3]} color="#355CFF" intensity={4.5} distance={15} />
        <pointLight position={[-5, -3, -3]} color="#E7FF59" intensity={2.5} distance={15} />
        <directionalLight position={[0, 5, 5]} color="#FFFFFF" intensity={2} />
      </>
    );
  }

  // Gallery Daylight Default
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} color="#FFFFFF" intensity={2.4} />
      <directionalLight position={[-5, 4, -2]} color="#EDE9FE" intensity={1.5} />
      <pointLight position={[0, -4, 2]} color="#E0F2FE" intensity={1.2} distance={10} />
    </>
  );
}

export default function PlaygroundScene() {
  const [shape, setShape] = useState<GeometryShape>("torusKnot");
  const [materialMode, setMaterialMode] = useState<MaterialMode>("porcelain");
  const [mood, setMood] = useState<LightingMood>("gallery");
  const [speed, setSpeed] = useState<number>(1);

  return (
    <div className="relative w-full rounded-2xl border border-ink-border bg-white p-6 overflow-hidden shadow-sm">
      {/* Top Header & Toggles */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#F0F0EB] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-violet animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-violet font-semibold">
              Spatial Sculpture Sandbox
            </span>
          </div>
          <h3 className="mt-1 font-display text-lg font-bold text-ink">
            Real-Time Material & Geometry Lab
          </h3>
        </div>

        {/* Speed toggle */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-ink-muted uppercase">Velocity</span>
          <button
            onClick={() => setSpeed(s => (s === 1 ? 2 : s === 2 ? 0.4 : 1))}
            className="flex items-center gap-1.5 rounded-full border border-ink-border bg-[#FAFAF7] px-3.5 py-1 font-mono text-xs text-ink transition-colors hover:border-ink hover:text-accent-cobalt"
          >
            <RefreshCw className="h-3 w-3" />
            <span>{speed === 2 ? "2.0x Fast" : speed === 0.4 ? "0.4x Slow" : "1.0x Normal"}</span>
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div
        className="relative h-[360px] md:h-[440px] w-full cursor-grab active:cursor-grabbing bg-[#FAFAF7] rounded-xl my-4 border border-[#F0F0EB]"
        data-cursor="hover"
        data-cursor-text="ROTATE"
      >
        <Canvas
          camera={{ position: [0, 0, 4.8], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <PlaygroundLights mood={mood} />
            <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
              <PlaygroundMesh shape={shape} materialMode={materialMode} speed={speed} />
            </Float>
          </Suspense>
        </Canvas>

        {/* Floating watermark */}
        <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] tracking-widest text-ink-muted uppercase">
          ThinkLoom • Three.js R3F Shading Engine
        </div>
      </div>

      {/* Control Bar */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-[#F0F0EB] pt-5">
        {/* Geometry Selector */}
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-ink-muted mb-2">
            Sculpture Geometry
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {(
              [
                ["torusKnot", "Torus Topology"],
                ["icosahedron", "Icosahedron"],
                ["dodecahedron", "Polyhedron"],
                ["cylinder", "Column Core"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setShape(id)}
                className={`rounded-lg px-2.5 py-1.5 text-left font-mono text-xs transition-all ${
                  shape === id
                    ? "bg-accent-cobalt text-white font-semibold shadow-xs"
                    : "bg-[#F4F4EE] text-ink hover:bg-[#EAEAE4]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Material Mode */}
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-ink-muted mb-2">
            Surface Shading
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {(
              [
                ["porcelain", "Matte Canvas"],
                ["coral", "Electric Coral"],
                ["ink", "Glazed Ink"],
                ["wireframe", "Cobalt Wire"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setMaterialMode(id)}
                className={`rounded-lg px-2.5 py-1.5 text-left font-mono text-xs transition-all ${
                  materialMode === id
                    ? "bg-accent-coral text-white font-semibold shadow-xs"
                    : "bg-[#F4F4EE] text-ink hover:bg-[#EAEAE4]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Lighting Mood */}
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-ink-muted mb-2">
            Lighting Environment
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {(
              [
                ["gallery", "Daylight"],
                ["coralDawn", "Coral Dawn"],
                ["cobaltStudio", "Cobalt Rim"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setMood(id)}
                className={`rounded-lg px-2 py-1.5 text-center font-mono text-[11px] transition-all ${
                  mood === id
                    ? "bg-ink text-white font-semibold"
                    : "bg-[#F4F4EE] text-ink hover:bg-[#EAEAE4]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
