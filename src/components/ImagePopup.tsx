import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { FaTimes } from 'react-icons/fa';
import ParticleImage from './ParticleImage';

type ImagePopupProps = {
  imageUrl: string;
  onClose: () => void;
};

const ImagePopup = ({ imageUrl, onClose }: ImagePopupProps) => {
  const [isParticleAnimationComplete, setIsParticleAnimationComplete] = useState(false);

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white text-3xl hover:text-brand-olive transition-colors z-20"
        onClick={onClose}
      >
        <FaTimes />
      </button>

      <div 
        className="relative w-[80vw] h-[80vh]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      >
        {/* Layer 1: The solid image (initially hidden) */}
        <img
          src={imageUrl}
          alt="Selected dish"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${isParticleAnimationComplete ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Layer 2: The particle canvas (fades out) */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isParticleAnimationComplete ? 'opacity-0' : 'opacity-100'}`}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <ParticleImage 
              imageUrl={imageUrl} 
              onAnimationComplete={() => setIsParticleAnimationComplete(true)}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
