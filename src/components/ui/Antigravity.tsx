"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface AntigravityProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  color?: string;
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  depthFactor?: number;
  pulseSpeed?: number;
  particleShape?: "capsule" | "sphere" | "box" | "tetrahedron";
  fieldStrength?: number;
}

interface Particle {
  t: number;
  speed: number;

  mx: number;
  my: number;
  mz: number;

  cx: number;
  cy: number;
  cz: number;

  randomRadiusOffset: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const modulo = (value: number, divisor: number) =>
  ((value % divisor) + divisor) % divisor;

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const AntigravityInner: React.FC<AntigravityProps> = ({
  count = 300,
  magnetRadius = 10,
  ringRadius = 10,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 2,
  lerpSpeed = 0.1,
  color = "#d30000ff",
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = "capsule",
  fieldStrength = 10,
}) => {
  const meshRef = useRef<THREE.InstancedMesh | null>(null);

  const { viewport } = useThree();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const lastMousePos = useRef({
    x: 0,
    y: 0,
  });

  const lastMouseMoveTime = useRef<number>(0);

  const virtualMouse = useRef({
    x: 0,
    y: 0,
  });

  const particles = useMemo<Particle[]>(() => {
    const width = viewport.width || 100;
    const height = viewport.height || 100;

    const generated: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const random = (offset: number) => seededRandom(i * 6 + offset);
      const x = (random(0) - 0.5) * width;
      const y = (random(1) - 0.5) * height;
      const z = (random(2) - 0.5) * 20;

      generated.push({
        t: random(3) * 100,

        speed: 0.01 + random(4) / 200,

        mx: x,
        my: y,
        mz: z,

        cx: x,
        cy: y,
        cz: z,

        randomRadiusOffset: (random(5) - 0.5) * 2,
      });
    }

    return generated;
  }, [count, viewport.width, viewport.height]);

  useEffect(() => {
    lastMouseMoveTime.current = Date.now();
  }, [autoAnimate]);

  useFrame((state) => {
    const mesh = meshRef.current;

    if (!mesh) return;

    const { viewport: currentViewport, pointer } = state;

    const mouseDistance = Math.sqrt(
      Math.pow(pointer.x - lastMousePos.current.x, 2) +
        Math.pow(pointer.y - lastMousePos.current.y, 2)
    );

    if (mouseDistance > 0.001) {
      lastMouseMoveTime.current = Date.now();

      lastMousePos.current = {
        x: pointer.x,
        y: pointer.y,
      };
    }

    let destinationX =
      (pointer.x * currentViewport.width) / 2;

    let destinationY =
      (pointer.y * currentViewport.height) / 2;

    // Automatic movement when user is idle.
    if (
      autoAnimate &&
      Date.now() - lastMouseMoveTime.current > 2000
    ) {
      const time = state.clock.getElapsedTime();

      destinationX =
        Math.sin(time * 0.5) *
        (currentViewport.width / 4);

      destinationY =
        Math.cos(time * 0.5 * 2) *
        (currentViewport.height / 4);
    }

    // Smooth pointer movement.
    const smoothFactor = 0.05;

    virtualMouse.current.x +=
      (destinationX - virtualMouse.current.x) *
      smoothFactor;

    virtualMouse.current.y +=
      (destinationY - virtualMouse.current.y) *
      smoothFactor;

    const targetX = virtualMouse.current.x;
    const targetY = virtualMouse.current.y;

    const globalRotation =
      state.clock.getElapsedTime() * rotationSpeed;

    particles.forEach((particle, index) => {
      particle.t += particle.speed / 2;

      const {
        t,
        mx,
        my,
        mz,
        randomRadiusOffset,
      } = particle;

      const projectionFactor = 1 - particle.cz / 50;

      const projectedTargetX =
        targetX * projectionFactor;

      const projectedTargetY =
        targetY * projectionFactor;

      const dx = mx - projectedTargetX;
      const dy = my - projectedTargetY;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      let targetPosition = {
        x: mx,
        y: my,
        z: mz * depthFactor,
      };

      if (distance < magnetRadius) {
        const angle =
          Math.atan2(dy, dx) + globalRotation;

        const wave =
          Math.sin(t * waveSpeed + angle) *
          (0.5 * waveAmplitude);

        const deviation =
          randomRadiusOffset *
          (5 / (fieldStrength + 0.1));

        const currentRingRadius =
          ringRadius + wave + deviation;

        targetPosition = {
          x:
            projectedTargetX +
            currentRingRadius * Math.cos(angle),

          y:
            projectedTargetY +
            currentRingRadius * Math.sin(angle),

          z:
            mz * depthFactor +
            Math.sin(t) *
              (1 * waveAmplitude * depthFactor),
        };
      }

      particle.cx +=
        (targetPosition.x - particle.cx) *
        lerpSpeed;

      particle.cy +=
        (targetPosition.y - particle.cy) *
        lerpSpeed;

      particle.cz +=
        (targetPosition.z - particle.cz) *
        lerpSpeed;

      dummy.position.set(
        particle.cx,
        particle.cy,
        particle.cz
      );

      dummy.lookAt(
        projectedTargetX,
        projectedTargetY,
        particle.cz
      );

      dummy.rotateX(Math.PI / 2);

      const currentDistanceToMouse =
        Math.sqrt(
          Math.pow(
            particle.cx - projectedTargetX,
            2
          ) +
            Math.pow(
              particle.cy - projectedTargetY,
              2
            )
        );

      const distanceFromRing = Math.abs(
        currentDistanceToMouse - ringRadius
      );

      let scaleFactor =
        1 - distanceFromRing / 10;

      scaleFactor = clamp(
        scaleFactor,
        0,
        1
      );

      const pulse =
        0.8 +
        Math.sin(t * pulseSpeed) *
          0.2 *
          particleVariance;

      const finalScale =
        scaleFactor *
        pulse *
        particleSize;

      dummy.scale.set(
        finalScale,
        finalScale,
        finalScale
      );

      dummy.updateMatrix();

      mesh.setMatrixAt(
        index,
        dummy.matrix
      );
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
    >
      {/* Particle Shape */}
      {particleShape === "capsule" && (
        <capsuleGeometry args={[0.1, 0.4, 4, 8]} />
      )}

      {particleShape === "sphere" && (
        <sphereGeometry args={[0.2, 16, 16]} />
      )}

      {particleShape === "box" && (
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      )}

      {particleShape === "tetrahedron" && (
        <tetrahedronGeometry args={[0.3]} />
      )}

      <meshBasicMaterial
        color={color}
        toneMapped={false}
      />
    </instancedMesh>
  );
};

const Antigravity: React.FC<AntigravityProps> = (
  props
) => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 50],
        fov: 35,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
      frameloop="always"
    >
      <AntigravityInner {...props} />
    </Canvas>
  );
};

export default Antigravity;