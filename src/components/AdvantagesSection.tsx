import { Card, CardContent } from "@/components/ui/card";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "🏆",
      title: "Только натуральное дерево",
      description:
        "Используем массив дуба, ясеня и сосны без ДСП и МДФ. Экологично и безопасно для здоровья.",
    },
    {
      icon: "⚡",
      title: "Быстрая установка",
      description:
        "Монтаж за 1 день благодаря готовым модулям. Минимум пыли и грязи в вашем доме.",
    },
    {
      icon: "🛡️",
      title: "Гарантия 10 лет",
      description:
        "Уверены в качестве — даем расширенную гарантию. Бесплатное обслуживание и ремонт.",
    },
    {
      icon: "💰",
      title: "Цена без переплат",
      description:
        "Работаем без посредников. Собственное производство — экономия до 30% от рыночной цены.",
    },
    {
      icon: "📐",
      title: "Точные размеры",
      description:
        "Бесплатный замер с выездом к вам. Изготавливаем точно под ваши параметры помещения.",
    },
    {
      icon: "🎨",
      title: "Любой дизайн",
      description:
        "Классический, модерн, лофт — адаптируем под ваш интерьер. 50+ вариантов отделки.",
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
            🎯 Специальное предложение
          </h3>
          <p className="text-lg mb-6">
            При заказе до конца месяца — скидка 15% + бесплатная доставка по
            городу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="text-lg">
              ⏰ Предложение действует до: <strong>31 декабря</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
