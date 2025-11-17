// Ball.tsx
import React from "react";
import { Float, Decal, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

type BallProps = {
  imgUrl: string;
  position?: [number, number, number];
};

const Ball: React.FC<BallProps> = ({ imgUrl, position = [0, 0, 0] }) => {
  const [decal] = useTexture([imgUrl]) as any[];

  return (
    <Float
      speed={1.5}               // vitesse flottement plus douce
      rotationIntensity={1.5}   // rotation continue mais pas trop rapide
      floatIntensity={1.0}      // flottement subtil
    >
      <mesh position={position} scale={1.4} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 2]} /> {/* plus de subdivisions pour un rendu plus lisse */}
        <meshStandardMaterial
          color="#f0f0f0"
          metalness={0.5}           // effet métallique léger
          roughness={0.2}           // surface plus lisse
          flatShading={false}
          emissive="#222"           // léger glow
          emissiveIntensity={0.15}
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}   // centré sur la face
            rotation={[0, 0, 0]}
            scale={0.9}            // légèrement plus grand
            map={decal}
            depthTest={false}      // évite que le decal disparaisse derrière
            
          />
        )}
      </mesh>
    </Float>
  );
};

export default Ball;
