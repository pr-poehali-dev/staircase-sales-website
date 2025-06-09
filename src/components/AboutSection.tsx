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
              Мы — семейная компания, которая специализируется на изготовлении
              деревянных лестниц премиум-класса с 2010 года. За 14 лет работы
              установили более 500 лестниц и стали №1 в регионе по качеству и
              надежности.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша философия — создавать не просто лестницы, а произведения
              искусства, которые служат поколениями. Каждая лестница проходит 47
              этапов контроля качества.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">
                  14+
                </div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">
                  500+
                </div>
                <div className="text-gray-600">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">15</div>
                <div className="text-gray-600">мастеров в команде</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">0</div>
                <div className="text-gray-600">рекламаций за год</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-amber-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🏭 Собственное производство 800м²
                </h3>
                <p className="text-gray-600">
                  Современный цех с немецким оборудованием. Полный цикл
                  производства: от заготовки до финишной отделки. Контроль
                  качества на каждом этапе.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🏆 Награды и сертификаты
                </h3>
                <p className="text-gray-600">
                  Лауреаты «Лучшее предприятие года» 2021-2023. Сертификаты ISO
                  9001, FSC. Член ассоциации деревообработчиков России.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  💎 Премиум материалы
                </h3>
                <p className="text-gray-600">
                  Работаем с лучшими поставщиками элитной древесины. Камерная
                  сушка, контроль влажности, отбор только 1-го сорта без сучков
                  и дефектов.
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
