import React from 'react';
import ModelViewer from './model-viewer';

const ModelViewerDemo = () => {
  const handleModelLoaded = () => {
    console.log('3D Model loaded successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Toy Car Model</h3>
        <ModelViewer
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
          width={600}
          height={500}
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableMouseParallax={true}
          enableHoverRotation={true}
          onModelLoaded={handleModelLoaded}
        />
      </div>
    </div>
  );
};

export { ModelViewerDemo }; 