import { Card, CardContent } from "@/components/ui/card";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "🏆",
      title: "Производитель №1 в регионе",
      description:
        "Лидеры рынка с 2010 года. Более 500 довольных клиентов. Победители конкурса «Лучшее предприятие года» 3 раза подряд.",
    },
    {
      icon: "💰",
      title: "Цены ниже на 25-40%",
      description:
        "Работаем без посредников и дилеров. Собственное производство позволяет предлагать цены производителя напрямую.",
    },
    {
      icon: "⚡",
      title: "Установка за 1 день гарантированно",
      description:
        "Уникальная технология модульной сборки. Пока конкуренты ставят за неделю, мы — за день. Минимум пыли и грязи.",
    },
    {
      icon: "🛡️",
      title: "Гарантия 10 лет + страховка",
      description:
        "Расширенная гарантия в 2 раза больше, чем у конкурентов. Страхование ответственности на 1 млн рублей в подарок.",
    },
    {
      icon: "🌿",
      title: "Только элитные породы дерева",
      description:
        "Дуб, ясень, бук, лиственница высшего сорта. Сертификаты FSC. Влажность 8-12% — идеальная для мебели.",
    },
    {
      icon: "🔧",
      title: "Сервис на всю жизнь",
      description:
        "Бесплатное обслуживание 3 года. Ремонт и реставрация по льготным ценам. Выезд мастера — бесплатно.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            6 главных преимуществ, которые отличают нас от конкурентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-montserrat">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-amber-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            🎯 Только до конца месяца!
          </h3>
          <p className="text-lg mb-6">
            Скидка 15% + бесплатная доставка по городу + замер в подарок.
            Экономия до 35 000 рублей!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-lg">
              ⏰ Осталось мест по акции: <strong>7 из 20</strong>
            </span>
            <Button
              size="lg"
              className="bg-white text-amber-700 hover:bg-gray-100 font-bold"
            >
              🚀 Забронировать скидку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
