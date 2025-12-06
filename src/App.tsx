import { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import Promotions from './sections/Promotions';
import Footer from './sections/Footer';
import ImagePopup from './components/ImagePopup';

import Marquee from './components/Marquee';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-background-light text-text-dark min-h-screen font-sans">
      <Header />
      <main className="pb-20"> {/* Add padding to bottom to avoid overlap with marquee */}
        <Hero />
        <Menu onImageClick={setSelectedImage} />
        <Promotions />
      </main>
      <Footer />

      {selectedImage && <ImagePopup imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
      <Marquee />
    </div>
  )
}

export default App;