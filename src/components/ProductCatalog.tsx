import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: "Лестница классическая «Аристократ»",
      material: "Массив дуба премиум",
      price: "89 000 ₽",
      originalPrice: "105 000 ₽",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      features: [
        "Высота до 3.5м",
        "Резные балясины",
        "Покрытие в 7 слоев",
        "Антискользящие ступени",
      ],
      isPopular: true,
      discount: "15%",
    },
    {
      id: 2,
      name: "Лестница модульная «Конструктор»",
      material: "Массив ясеня",
      price: "67 000 ₽",
      originalPrice: "78 000 ₽",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop",
      features: [
        "Сборка за 4 часа",
        "Подходит для любых углов",
        "Современный дизайн",
        "Гарантия 10 лет",
      ],
      isPopular: false,
      discount: "14%",
    },
    {
      id: 3,
      name: "Лестница винтовая «Спираль»",
      material: "Массив бука",
      price: "78 000 ₽",
      originalPrice: "90 000 ₽",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      features: [
        "Экономия 40% места",
        "Элегантный вид",
        "Центральная опора",
        "Поручень из массива",
      ],
      isPopular: false,
      discount: "13%",
    },
    {
      id: 4,
      name: "Лестница П-образная «Комфорт»",
      material: "Массив сосны элит",
      price: "95 000 ₽",
      originalPrice: "115 000 ₽",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop",
      features: [
        "Промежуточная площадка",
        "Удобный подъем",
        "Классический стиль",
        "Ширина 90см",
      ],
      isPopular: true,
      discount: "17%",
    },
    {
      id: 5,
      name: "Лестница Г-образная «Практик»",
      material: "Массив лиственницы",
      price: "72 000 ₽",
      originalPrice: "82 000 ₽",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      features: [
        "Поворот 90°",
        "Экономия пространства",
        "Прочная конструкция",
        "Натуральная текстура",
      ],
      isPopular: false,
      discount: "12%",
    },
    {
      id: 6,
      name: "Лестница мансардная «Чердачная»",
      material: "Массив березы",
      price: "45 000 ₽",
      originalPrice: "52 000 ₽",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop",
      features: [
        "Складная конструкция",
        "Люк в комплекте",
        "Малые габариты",
        "Нагрузка до 200кг",
      ],
      isPopular: false,
      discount: "13%",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Каталог готовых лестниц
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите подходящую модель из нашего каталога. Все лестницы
            изготавливаются индивидуально под ваши размеры.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {product.isPopular && (
                <Badge className="absolute top-4 left-4 z-10 bg-red-500 text-white">
                  🔥 Хит продаж
                </Badge>
              )}

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                  -{product.discount}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-amber-700 font-medium">
                  {product.material}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-1 text-sm text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-800">
                      {product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    📞 Заказать расчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-amber-700 text-amber-700"
          >
            Посмотреть все модели (25+)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
