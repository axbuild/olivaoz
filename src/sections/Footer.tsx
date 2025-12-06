import { FaVk, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaVk />, href: 'https://vk.com/olivaoz' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/meet.oliva?igsh=MTFjZ2ljZ2lxbmxqdw==' },
  ];

  return (
    <footer id="contact" className="bg-text-dark text-white pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-brand-olive-dark">Свяжитесь с нами</h3>
            <p className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-3 text-brand-olive" />
              <span>г. Орехово-Зуево, ул. 1905 года, дом 15А</span>
            </p>
            <p className="flex items-center mb-4">
              <FaPhone className="mr-3 text-brand-olive" />
              <a href="tel:+79013889784" className="hover:text-brand-olive-dark transition-colors">+7 (901) 388-97-84</a>
            </p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-3 text-brand-olive" />
               <a href="mailto:vahit0v00001@mail.ru" className="hover:text-brand-olive-dark transition-colors">vahit0v00001@mail.ru</a>
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-brand-olive-dark transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Map Placeholder */}
          <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <a 
              href="https://yandex.ru/maps/?text=г. Орехово-Зуево, ул. 1905 года, дом 15А"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-4 border-2 border-dashed border-gray-400 rounded-md hover:border-brand-olive-dark hover:text-brand-olive-dark transition-all"
            >
              <h4 className="font-bold text-lg">Нажмите, чтобы открыть карту</h4>
              <p>(Яндекс.Карты)</p>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Кафе Олива. Все права защищены.</p>
          <p className="mt-1">ИНН: 500111210092</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
