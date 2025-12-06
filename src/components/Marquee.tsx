import Button from './Button';
import Countdown from './Countdown';
import './Marquee.css'; // Import the CSS for the animation

const Marquee = () => {
  const marqueeText = "🔥 Секретная акция дня! Позвоните, чтобы узнать! ";
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-olive-dark text-white p-2 z-50 flex items-center">
      <div className="flex-shrink-0 mr-4">
        <Countdown />
      </div>
      
      {/* Wrapper to clip the overflowing animation */}
      <div className="flex-grow overflow-hidden whitespace-nowrap">
        <div className="marquee-content inline-block">
          {/* Repeat the text to ensure a smooth loop */}
          <span className="mx-4">{marqueeText}</span>
          <span className="mx-4">{marqueeText}</span>
          <span className="mx-4">{marqueeText}</span>
          <span className="mx-4">{marqueeText}</span>
        </div>
      </div>

      <div className="flex-shrink-0 ml-4">
        <Button as="a" href="tel:+79013889784" className="py-2 px-4 text-sm !bg-brand-olive-light !text-text-dark">
          📞 Позвонить
        </Button>
      </div>
    </div>
  );
};

export default Marquee;
