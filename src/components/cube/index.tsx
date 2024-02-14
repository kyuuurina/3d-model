'use client';

import { Canvas } from '@react-three/fiber';
import {
  Environment,
  PresentationControls,
  useGLTF,
  OrbitControls,
} from '@react-three/drei';

function MeshComponent() {
  const fileUrl = '/scene.gltf';
  const model = useGLTF(fileUrl);

  return (
    <>
      <Environment preset="warehouse" />
      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive object={model.scene} position-y={-1.2}></primitive>
      </PresentationControls>
    </>
  );
}

export function Cube() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas className="h-2xl w-2xl">
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
