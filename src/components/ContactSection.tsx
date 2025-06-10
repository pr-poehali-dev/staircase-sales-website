import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Связаться с нами
          </h2>
          <p className="text-lg text-gray-600">
            Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                  📞 Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-amber-700 mb-2">
                  +7 (495) 123-45-67
                </p>
                <p className="text-gray-600">Ежедневно с 9:00 до 20:00</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Позвонить сейчас
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                  📧 Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  info@stairs-master.ru
                </p>
                <p className="text-gray-600">Ответим в течение 2 часов</p>
                <Button
                  variant="outline"
                  className="mt-4 border-amber-700 text-amber-700"
                >
                  Написать письмо
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                  📍 Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-2">
                  Москва, Рябиновая 41 к1 с6 Новосибирск, ул. Плахотного 2А
                </p>
                <p className="text-gray-600 mb-4">
                  Производственный цех и офис
                  <br />
                  Режим работы: Пн-Пт 9:00-18:00
                </p>
                <a
                  href="https://go.2gis.com/JxkvV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Показать на карте
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                  🛒 Наш магазин
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-2">
                  Магазин на площадке Авито
                </p>
                <p className="text-gray-600 mb-4">
                  Готовые лестницы и комплектующие
                  <br />
                  Доставка по всей России
                </p>
                <a
                  href="https://avito.ru/brands/lest_profihobby"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                  >
                    Перейти в магазин
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                🎯 Бесплатный расчет
              </CardTitle>
              <p className="text-center text-gray-600">
                Оставьте заявку — перезвоним в течение 15 минут
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тип лестницы
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>Классическая прямая</option>
                  <option>Модульная</option>
                  <option>Винтовая</option>
                  <option>П-образная</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дополнительная информация
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent h-24 resize-none"
                  placeholder="Размеры помещения, пожелания по дизайну..."
                ></textarea>
              </div>

              <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white text-lg py-3">
                🚀 Получить расчет бесплатно
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
