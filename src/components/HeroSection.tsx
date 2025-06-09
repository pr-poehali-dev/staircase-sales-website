import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <Badge className="mb-4 bg-orange-600 text-white">
          🎯 Скидка 15% на первый заказ
        </Badge>

        <h1 className="text-5xl font-bold text-gray-800 mb-6 font-montserrat">
          Деревянные лестницы
          <br />
          <span className="text-amber-700">от производителя №1</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Изготавливаем лестницы из элитных пород дерева с 2010 года.
          Собственное производство, гарантия 10 лет, установка за 1 день. Цены
          от производителя без наценок посредников.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3"
          >
            📞 Получить расчет бесплатно
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-amber-700 text-amber-700 px-8 py-3"
          >
            📋 Смотреть каталог
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-700">500+</div>
            <div className="text-gray-600">установленных лестниц</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-700">10 лет</div>
            <div className="text-gray-600">гарантии качества</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-700">1 день</div>
            <div className="text-gray-600">установка и монтаж</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
