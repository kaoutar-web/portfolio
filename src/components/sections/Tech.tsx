// Tech.tsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import CanvasLoader from "../layout/Loader";
import Ball from "../canvas/Ball";

const Tech: React.FC = () => {
  const totalBalls = technologies.length;
  const maxCols = 6; // nombre max de balls par ligne
  const gap = 5; // espacement constant

  // calcul dynamique des colonnes et lignes
  const cols = totalBalls < maxCols ? totalBalls : maxCols;
  const rows = Math.ceil(totalBalls / cols);

  return (
    <div className="w-full h-[600px]">
      <Canvas
        shadows
        frameloop="demand"
        camera={{ position: [0, 0, 20], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
          <OrbitControls enableZoom={false} enablePan={false} />

          {technologies.map((tech, index) => {
            const colIndex = index % cols;
            const rowIndex = Math.floor(index / cols);

            // centrage automatique
            const x = colIndex * gap - ((cols - 1) * gap) / 2;
            const y = -rowIndex * gap + ((rows - 1) * gap) / 2;

            return <Ball key={tech.name} imgUrl={tech.icon} position={[x, y, 0]} />;
          })}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
