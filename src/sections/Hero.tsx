import Button from '../components/Button';
import ThreePizza from '../components/ThreePizza';
import BgImage from '../assets/images/IMG_6154_1.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-brand-olive-dark">
              Та самая пицца, которую вы искали.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Готовим из отборных продуктов с любовью к каждому кусочку. 
              <br />
              <span className="text-brand-olive-dark font-bold">Откройте для себя новый любимый вкус в Орехово-Зуево.</span>
            </p>
            <Button as="a" href="#menu" className="text-lg">
              🍕 Смотреть меню
            </Button>
          </div>

          {/* Right Side: 3D Model */}
          <div className="w-full h-64 md:h-96">
            <ThreePizza />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
