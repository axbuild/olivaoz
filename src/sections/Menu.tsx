import MenuItem from '../components/MenuItem';

// Image imports
import CheeseSoupImg from '../assets/images/IMG_6124_1.png';
import MeatSoupImg from '../assets/images/IMG_6126_1.png';
import MushroomSoupImg from '../assets/images/IMG_6138_1.png';
import GrillPizzaImg from '../assets/images/IMG_4659_pizza_1.png';
import OlivaPizzaImg from '../assets/images/IMG_4673_pizza_1.png';
import CaesarPizzaImg from '../assets/images/IMG_4682_pizza_1.png';
import BbqPizzaImg from '../assets/images/IMG_4703_pizza_1.png';
import PearPizzaImg from '../assets/images/IMG_4715_pizza_1.png';
import TeaImg from '../assets/images/IMG_6007_1.png';


const menuData = {
  pizzas: [
    { title: 'Пицца гриль', description: 'Ароматный копченый цыпленок, свежий перец и наш фирменный соус барбекю.', price: '650₽', imageUrl: GrillPizzaImg },
    { title: 'Авторская пицца Олива', description: 'Фирменный рецепт с сочными оливками, нежным сыром фета и пикантными вялеными томатами.', price: '720₽', imageUrl: OlivaPizzaImg },
    { title: 'Пицца Цезарь', description: 'Неожиданное сочетание: курица, хрустящие листья салата и соус "Цезарь" на тонком тесте.', price: '680₽', imageUrl: CaesarPizzaImg },
    { title: 'Барбекю', description: 'Для любителей классики: сочная томленая свинина, кольца лука и дымный соус барбекю.', price: '690₽', imageUrl: BbqPizzaImg },
    { title: 'Сладкая груша', description: 'Изысканное сочетание сыра горгонзола, сладкой груши, грецких орехов и капельки ароматного меда.', price: '750₽', imageUrl: PearPizzaImg },
  ],
  soups: [
     { title: 'Сырный суп', description: 'Нежный сливочный суп с насыщенным сырным вкусом. Подаем с хрустящими гренками.', price: '350₽', imageUrl: CheeseSoupImg },
     { title: 'Мясной суп', description: 'Наваристый, сытный и по-домашнему вкусный мясной суп, который согреет в любую погоду.', price: '400₽', imageUrl: MeatSoupImg },
     { title: 'Грибной суп', description: 'Бархатистый крем-суп из свежих шампиньонов с нотками пряных трав.', price: '380₽', imageUrl: MushroomSoupImg },
  ],
  drinks: [
    { title: 'Авторский чай', description: 'Богатый выбор черного, зеленого и травяного чая, который идеально дополнит вашу трапезу.', price: '200₽', imageUrl: TeaImg },
  ]
};

const Menu = ({ onImageClick }: { onImageClick: (url: string) => void }) => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-olive-dark">
            Наше меню
          </h2>
          <p className="text-lg text-text-secondary mt-2">
            Попробуйте вкус настоящей Италии
          </p>
        </div>
        
        {/* Pizzas */}
        <h3 className="text-3xl font-bold text-brand-olive-dark mb-8">Пицца</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {menuData.pizzas.map(item => <MenuItem key={item.title} {...item} onClick={() => item.imageUrl && onImageClick(item.imageUrl)} />)}
        </div>

        {/* Soups & Drinks */}
        <h3 className="text-3xl font-bold text-brand-olive-dark mb-8">Супы и напитки</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuData.soups.map(item => <MenuItem key={item.title} {...item} onClick={() => item.imageUrl && onImageClick(item.imageUrl)} />)}
          {menuData.drinks.map(item => <MenuItem key={item.title} {...item} onClick={() => item.imageUrl && onImageClick(item.imageUrl)} />)}
        </div>

      </div>
    </section>
  );
};

export default Menu;
