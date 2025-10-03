"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router";
import {
  TOOL_AND_DIE_PRODUCT_PAGE,
  TOOL_AND_DIE_PRODUCT_PAGE_2,
} from "../../routes/url";
import AppButton from "../AppButton";

const Globe = ({
  radius = 3.5,
  latStep = 10, // reduced step → more latitude lines
  lonStep = 10, // reduced step → more longitude lines
  position = [0, 0, 0],
}) => {
  const groupRef = useRef();
  const { mouse } = useThree();
  const floatOffset = useRef(0);
  const timeOffset = useRef(Math.random() * Math.PI * 2);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    floatOffset.current =
      Math.sin(clock.elapsedTime * 0.5 + timeOffset.current) * 0.15;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * Math.PI * 0.15,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * Math.PI * 0.1,
      0.03
    );

    groupRef.current.position.y = position[1] + floatOffset.current;
  });

  const { rings, dots } = useMemo(() => {
    const items = [];
    const dotItems = [];

    // Latitude lines
    for (let lat = -80; lat <= 80; lat += latStep) {
      const phi = (lat * Math.PI) / 180;
      const r = Math.cos(phi) * radius;
      const y = Math.sin(phi) * radius;

      const curve = new THREE.EllipseCurve(0, 0, r, r, 0, Math.PI * 2);
      const points = curve
        .getPoints(180)
        .map((p) => new THREE.Vector3(p.x, y, p.y));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      items.push(
        <line key={`lat-${lat}`} geometry={geometry}>
          <lineBasicMaterial color="#FF6363" />
        </line>
      );

      // Add dots on intersections
      for (let lon = 0; lon < 360; lon += lonStep) {
        const theta = (lon * Math.PI) / 180;
        const x = radius * Math.cos(phi) * Math.cos(theta);
        const z = radius * Math.cos(phi) * Math.sin(theta);

        dotItems.push(
          <mesh key={`dot-${lat}-${lon}`} position={[x, y, z]}>
            <sphereGeometry args={[0.04, 5, 5]} /> {/* larger dot size */}
            <meshBasicMaterial color="#FF6363" />
          </mesh>
        );
      }
    }

    // Longitude lines
    for (let lon = 0; lon < 360; lon += lonStep) {
      const theta = (lon * Math.PI) / 180;
      const pts = [];
      for (let lat = -90; lat <= 90; lat += 2) {
        const phi = (lat * Math.PI) / 180;
        pts.push(
          new THREE.Vector3(
            radius * Math.cos(phi) * Math.cos(theta),
            radius * Math.sin(phi),
            radius * Math.cos(phi) * Math.sin(theta)
          )
        );
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(pts);
      items.push(
        <line key={`lon-${lon}`} geometry={geometry}>
          <lineBasicMaterial color="#FF6363" />
        </line>
      );
    }

    return { rings: items, dots: dotItems };
  }, [radius, latStep, lonStep]);

  return (
    <group ref={groupRef} position={position}>
      {rings}
      {dots}
    </group>
  );
};

const CurvedFiberMesh = () => {
  const ref = useRef();
  const geometryRef = useRef();
  const dotsRef = useRef([]);

  useFrame(({ clock }) => {
    if (!ref.current || !geometryRef.current) return;

    const pos = geometryRef.current.attributes.position;
    const time = clock.elapsedTime;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      const curveIntensity = 1.2;
      const z =
        Math.sin(x * 0.15 + time * 0.8) * curveIntensity +
        Math.cos(y * 0.15 + time * 0.6) * curveIntensity +
        Math.sin(x * 0.3 + time * 0.4) * curveIntensity * 0.5;

      pos.setZ(i, z);

      // Update dot positions
      if (dotsRef.current[i]) {
        dotsRef.current[i].position.set(x, y, z);
      }
    }
    pos.needsUpdate = true;
  });

  const dots = useMemo(() => {
    if (!geometryRef.current) return null;
    const positions = geometryRef.current.attributes.position;
    return Array.from({ length: positions?.count || 0 }, (_, i) => (
      <mesh key={`fiber-dot-${i}`} ref={(el) => (dotsRef.current[i] = el)}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#FF6363" />
      </mesh>
    ));
  }, []);

  return (
    <group>
      <mesh ref={ref} rotation={[-0.4, 0, 0]} position={[0, 0, -8]}>
        <planeGeometry ref={geometryRef} args={[50, 50, 20, 20]} />{" "}
        {/* denser mesh */}
        <meshBasicMaterial
          color="#FF6363"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      {dots}
    </group>
  );
};

export default function VantaStyleGlobe() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div className="relative flex flex-col md:flex-row w-[98vw] h-[100vh] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#FF007F" />
        <CurvedFiberMesh />
        <Globe radius={4} latStep={10} lonStep={10} position={[6, -1, 0]} />
      </Canvas>
      <Stack className="absolute top-[200px] max-w-[90vw] md:max-w-[60vw]">
        <div className="relative flex-1 flex flex-col gap-[50px] md:text-left z-10 md:ml-[40px] xl:ml-[80px] p-[20px]">
          <div className="flex flex-col gap-[20px]">
            <h1
              className={`text-[26px] md:text-[35px] xl:text-[55px] font-bold leading-tight text-[#1A1A1A]`}
            >
              From Grit to Greatness Built on Precision
            </h1>
            <p
              className={`text-[18px] md:text-[20px] font-[400] text-gray-700`}
            >
              Shaping a future of excellence through precision and performance
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <AppButton
              BtnOnClick={() => handleNavigate(TOOL_AND_DIE_PRODUCT_PAGE)}
              BtnVariant={"redContained"}
              className="!min-w-fit !h-[35px] xl:!h-[45px] !w-[120px] xl:!w-[180px] !rounded-[40px] text-[18px] font-[500]"
            >
              Tool & Die Products
            </AppButton>
            <AppButton
              BtnOnClick={() => handleNavigate(TOOL_AND_DIE_PRODUCT_PAGE_2)}
              BtnVariant={"blackOutlined"}
              className="!min-w-fit !h-[35px] xl:!h-[45px] !w-[120px] xl:!w-[180px] !rounded-[40px] text-[18px] font-[500]"
            >
              Press Components
            </AppButton>
          </div>
        </div>
      </Stack>
    </div>
  );
}
