import Button from '../components/Button';
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  const navLinks = [
    { title: 'Меню', href: '#menu' },
    { title: 'Акции', href: '#promotions' },
    { title: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="bg-background-light/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-brand-olive-dark">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 18a7.95 7.95 0 0 0 5-2.24" />
            <path d="M14 14a7.95 7.95 0 0 0-5 2.24" />
            <path d="M4 6a7.95 7.95 0 0 05 2.24" />
            <path d="M5 10a7.95 7.95 0 0 0-5-2.24" />
            <ellipse cx="12" cy="12" rx="10" ry="10" />
          </svg>
          <span className="text-2xl font-bold">
            Олива Кафе
          </span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-text-dark hover:text-brand-olive transition-colors">
              {link.title}
            </a>
          ))}
        </div>
        <Button as="a" href="tel:+79013889784">
          📞 Позвонить
        </Button>
      </nav>
    </header>
  );
};

export default Header;
