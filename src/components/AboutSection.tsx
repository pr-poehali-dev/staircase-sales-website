import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 font-montserrat">
              О нашей компании
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы специализируемся на изготовлении деревянных лестниц с 2010
              года. За это время установили более 500 лестниц в частных домах,
              коттеджах и офисах по всей области.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша команда — это опытные столяры и дизайнеры, которые создают не
              просто лестницы, а настоящие произведения искусства из дерева.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">
                  14+
                </div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">12</div>
                <div className="text-gray-600">мастеров в команде</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-amber-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🏭 Собственное производство
                </h3>
                <p className="text-gray-600">
                  Современный цех площадью 800 м² с профессиональным
                  оборудованием для обработки дерева и точной подгонки деталей.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  ♻️ Экологичные материалы
                </h3>
                <p className="text-gray-600">
                  Работаем только с сертифицированной древесиной от проверенных
                  поставщиков. Используем безопасные лаки и пропитки.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🎓 Профессиональная команда
                </h3>
                <p className="text-gray-600">
                  Наши мастера регулярно повышают квалификацию и следят за
                  новейшими тенденциями в области деревообработки.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
