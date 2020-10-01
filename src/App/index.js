import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

import { Tripod } from "./components";
import "./styles.css";

export default () => {
  return (
    <Canvas>
      <Tripod />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};
