"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Text } from "@react-three/drei"
import { useRef, Suspense } from "react"
import * as THREE from "three"

function CodeTags() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Opening tag < */}
        <group position={[-0.4, 0, 0]}>
          {/* Left angle bracket */}
          <mesh position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.3, 0.08, 0.05]} />
            <meshStandardMaterial
              color="#10b981"
              emissive="#10b981"
              emissiveIntensity={0.8}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
          {/* Right angle bracket */}
          <mesh position={[-0.15, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.3, 0.08, 0.05]} />
            <meshStandardMaterial
              color="#10b981"
              emissive="#10b981"
              emissiveIntensity={0.8}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        </group>

        {/* Closing tag /> */}
        <group position={[0.4, 0, 0]}>
          {/* Left angle bracket */}
          <mesh position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.3, 0.08, 0.05]} />
            <meshStandardMaterial
              color="#034c80"
              emissive="#034c80"
              emissiveIntensity={0.8}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
          {/* Right angle bracket */}
          <mesh position={[-0.15, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.3, 0.08, 0.05]} />
            <meshStandardMaterial
              color="#034c80"
              emissive="#034c80"
              emissiveIntensity={0.8}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
          {/* Forward slash */}
          <mesh position={[0.1, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.25, 0.08, 0.05]} />
            <meshStandardMaterial
              color="#034c80"
              emissive="#034c80"
              emissiveIntensity={0.8}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        </group>

        {/* Glow effect */}
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[1.2, 0.3]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.2}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}

function CodeBlock() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} position={[-1.5, 0, 0]}>
        {/* Main code block */}
        <mesh>
          <boxGeometry args={[0.8, 1.2, 0.3]} />
          <meshStandardMaterial
            color="#034c80"
            metalness={0.8}
            roughness={0.2}
            emissive="#034c80"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Code lines */}
        {[0, 0.2, 0.4, -0.2, -0.4].map((y, i) => (
          <mesh key={i} position={[0, y, 0.16]}>
            <boxGeometry args={[0.6, 0.05, 0.02]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function ServerRack() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -state.clock.elapsedTime * 0.15
      groupRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 0.15
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.3}>
      <group ref={groupRef} position={[1.5, 0, 0]}>
        {/* Main rack */}
        <mesh>
          <boxGeometry args={[0.4, 1.5, 0.5]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        {/* Server slots */}
        {[-0.5, -0.2, 0.1, 0.4, 0.7].map((y, i) => (
          <mesh key={i} position={[0, y, 0.26]}>
            <boxGeometry args={[0.35, 0.25, 0.02]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#10b981" : "#034c80"}
              emissive={i % 2 === 0 ? "#10b981" : "#034c80"}
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}
        {/* Status LEDs */}
        {[-0.5, -0.2, 0.1, 0.4, 0.7].map((y, i) => (
          <mesh key={`led-${i}`} position={[0.2, y, 0.26]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function NetworkNode() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.25
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.35
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0.8, 0]}>
        {/* Central node */}
        <mesh>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#034c80"
            metalness={0.8}
            roughness={0.2}
            emissive="#034c80"
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* Connection lines */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = Math.cos(rad) * 0.5
          const z = Math.sin(rad) * 0.5
          return (
            <mesh key={i} position={[x, 0, z]}>
              <cylinderGeometry args={[0.01, 0.01, 0.5]} />
              <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
            </mesh>
          )
        })}
        {/* Outer nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = Math.cos(rad) * 0.5
          const z = Math.sin(rad) * 0.5
          return (
            <mesh key={`node-${i}`} position={[x, 0, z]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color="#10b981"
                emissive="#10b981"
                emissiveIntensity={0.6}
              />
            </mesh>
          )
        })}
      </group>
    </Float>
  )
}

function CircuitBoard() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1 - 0.8
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Board base */}
        <mesh>
          <boxGeometry args={[1.5, 0.05, 1.5]} />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
        {/* Circuit traces */}
        {[
          { start: [-0.6, 0, -0.6] as [number, number, number], end: [0.6, 0, -0.6] as [number, number, number] },
          { start: [-0.6, 0, 0] as [number, number, number], end: [0.6, 0, 0] as [number, number, number] },
          { start: [-0.6, 0, 0.6] as [number, number, number], end: [0.6, 0, 0.6] as [number, number, number] },
          { start: [-0.6, 0, -0.6] as [number, number, number], end: [-0.6, 0, 0.6] as [number, number, number] },
          { start: [0.6, 0, -0.6] as [number, number, number], end: [0.6, 0, 0.6] as [number, number, number] },
        ].map((trace, i) => (
          <mesh key={i} position={[(trace.start[0] + trace.end[0]) / 2, 0.03, (trace.start[2] + trace.end[2]) / 2]}>
            <boxGeometry args={[Math.abs(trace.end[0] - trace.start[0]) || 0.05, 0.02, Math.abs(trace.end[2] - trace.start[2]) || 0.05]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
          </mesh>
        ))}
        {/* Components */}
        {[
          { pos: [-0.5, 0.05, -0.5] as [number, number, number], size: [0.15, 0.1, 0.15] as [number, number, number] },
          { pos: [0.5, 0.05, -0.5] as [number, number, number], size: [0.15, 0.1, 0.15] as [number, number, number] },
          { pos: [-0.5, 0.05, 0.5] as [number, number, number], size: [0.15, 0.1, 0.15] as [number, number, number] },
          { pos: [0.5, 0.05, 0.5] as [number, number, number], size: [0.15, 0.1, 0.15] as [number, number, number] },
          { pos: [0, 0.05, 0] as [number, number, number], size: [0.2, 0.15, 0.2] as [number, number, number] },
        ].map((comp, i) => (
          <mesh key={i} position={comp.pos}>
            <boxGeometry args={comp.size} />
            <meshStandardMaterial
              color="#034c80"
              metalness={0.7}
              roughness={0.3}
              emissive="#034c80"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function TechParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 150
  
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 8
    positions[i + 1] = (Math.random() - 0.5) * 8
    positions[i + 2] = (Math.random() - 0.5) * 8
    
    const color = Math.random() > 0.5 ? 0.02 : 0.38 // Blue or green
    colors[i] = color
    colors[i + 1] = color === 0.02 ? 0.3 : 0.73 // Blue or green
    colors[i + 2] = color === 0.02 ? 0.5 : 0.51 // Blue or green
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.6} />
    </points>
  )
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-blue-500/20 dark:to-green-500/20">
      <div className="w-16 h-16 border-4 border-primary dark:border-blue-400 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#034c80" />
          <pointLight position={[10, -10, -5]} intensity={0.8} color="#10b981" />
          <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
          
          <CodeTags />
          <CodeBlock />
          <ServerRack />
          <NetworkNode />
          <CircuitBoard />
          <TechParticles />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
