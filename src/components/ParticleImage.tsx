import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

const ParticleImage = ({ imageUrl, onAnimationComplete }: { imageUrl: string, onAnimationComplete: () => void }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!);

  const geometry = useMemo(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Important for reading pixel data
    img.src = imageUrl;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    
    const geom = new THREE.BufferGeometry();

    img.onload = () => {
      const imgWidth = 250; // Increased resolution a bit
      const scale = imgWidth / img.width;
      const imgHeight = img.height * scale;
      
      canvas.width = imgWidth;
      canvas.height = imgHeight;
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
      const imageData = ctx.getImageData(0, 0, imgWidth, imgHeight).data;

      const positions = [];
      const colors = [];
      const randomPositions = [];
      const imageAspect = imgWidth / imgHeight;
      const displayScale = 7; // Increased size

      for (let y = 0; y < imgHeight; y++) {
        for (let x = 0; x < imgWidth; x++) {
          const i = (y * imgWidth + x) * 4;
          const alpha = imageData[i + 3];
          
          if (alpha > 128) {
            positions.push(
              (x / imgWidth - 0.5) * displayScale * imageAspect, 
              (-y / imgHeight + 0.5) * displayScale, 
              0
            );
            colors.push(imageData[i] / 255, imageData[i + 1] / 255, imageData[i + 2] / 255);
            randomPositions.push(
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
            );
          }
        }
      }
      
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geom.setAttribute('aRandom', new THREE.Float32BufferAttribute(randomPositions, 3));
      geom.computeBoundingSphere();
    };

    return geom;
  }, [imageUrl]);

  useEffect(() => {
    if (shaderMaterialRef.current) {
        gsap.to(shaderMaterialRef.current.uniforms.uProgress, {
            value: 1,
            duration: 1.5, // Changed from 2.5 to 1.5
            ease: 'power3.out',
            delay: 0.2,
            onComplete: onAnimationComplete
        });
    }
  }, [onAnimationComplete]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
        pointsRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });


  return (
    <points ref={pointsRef}>
      <primitive object={geometry} />
      <shaderMaterial
        ref={shaderMaterialRef}
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uProgress: { value: 0 },
          uSize: { value: 15.0 },
          uOpacity: { value: 1.0 }
        }}
        vertexShader={`
          uniform float uProgress;
          uniform float uSize;
          attribute vec3 aRandom;
          varying vec3 vColor;

          void main() {
            vColor = color;
            vec3 p = mix(aRandom, position, uProgress);
            vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = uSize * (1.0 / -mvPosition.z) * uProgress;
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          varying vec3 vColor;
          uniform float uOpacity;
          
          void main() {
            if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
            gl_FragColor = vec4(vColor, uOpacity);
          }
        `}
      />
    </points>
  );
};


export default ParticleImage;
