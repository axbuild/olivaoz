import { FaPhoneAlt } from 'react-icons/fa';
import Button from '../components/Button';
import CorpImage from '../assets/images/IMG_6160_1.png';
import BanquetImage from '../assets/images/IMG_6150_1.png';

import Countdown from '../components/Countdown';

export const Promotions = () => {
  return (
    <section id="promotions" className="py-20 bg-background-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-brand-olive-dark">
            Больше, чем просто пицца
          </h2>
          <p className="text-lg text-text-secondary mt-2">
            Мы любим делать каждое событие особенным.
          </p>
        </div>

        {/* --- Section 1: Corporate Events --- */}
        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-brand-olive-dark mb-4">Корпоративы по пятницам</h3>
            <p className="text-text-secondary text-lg mb-6">
              Завершите рабочую неделю на вкусной ноте! Устройте небольшой праздник для коллег прямо в офисе. Мы предлагаем специальные условия и сеты для корпоративных заказов.
            </p>
            <Button as="a" href="tel:+79013889784">
              💼 Обсудить заказ
            </Button>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-80">
             <img src={CorpImage} alt="Corporate Event" className="w-full h-full object-cover rounded-lg shadow-xl"/>
          </div>
        </div>

        {/* --- Section 2: Banquet Hall --- */}
        <div className="flex flex-wrap items-center mb-20 flex-row-reverse">
          <div className="w-full md:w-1/2 pl-0 md:pl-12 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-brand-olive-dark mb-4">Банкетный зал на 25 человек</h3>
            <p className="text-text-secondary text-lg mb-6">
              Ищете уютное место для дня рождения или важного события? Наш стильный зал идеально подходит для компаний до 25 гостей. Создайте незабываемую атмосферу для вашего праздника!
            </p>
            <Button as="a" href="tel:+79013889784">
              🎉 Забронировать зал
            </Button>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-80">
            <img src={BanquetImage} alt="Banquet Hall" className="w-full h-full object-cover rounded-lg shadow-xl"/>
          </div>
        </div>

        {/* --- Section 3: Daily Deals --- */}
        <div className="text-center bg-white p-12 rounded-xl shadow-2xl max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-brand-olive-dark mb-4">Секретная акция дня!</h3>
          <div className="my-6 flex justify-center text-text-dark">
            <Countdown />
          </div>
          <p className="text-text-secondary text-lg mb-6">
            Каждый день — новое выгодное предложение на доставку. Оно действует только сегодня и доступно только по телефону. Не упустите свой шанс!
          </p>
          <Button as="a" href="tel:+79013889784" className="text-xl">
            🔥 Узнать акцию и заказать
          </Button>
        </div>

      </div>
    </section>
  )
}


export default Promotions;