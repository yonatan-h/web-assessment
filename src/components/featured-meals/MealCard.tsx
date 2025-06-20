export interface Meal {
  price: number;
  title: string;
  rating: number;
  isOpen: boolean;
  mainImage: string;
  logoImage: string;
  restaurantName: string;
}

export default function MealCard({
  price,
  title,
  rating,
  isOpen,
  mainImage,
  logoImage,
  restaurantName,
}: Meal) {
  return (
    <div className="relative  flex flex-col gap-6">
      <div className="absolute top-4 left-3">
        <span className="bg-secondary text-white px-4 py-2 font-bold rounded-lg">
          ${price}
        </span>
      </div>
      <img src={mainImage} alt={title} className="w-full rounded-lg" />
      <div className="flex gap-3">
        <img className="w-12 h-12" src={logoImage} alt={`${restaurantName}`} />
        <div>
          <h3 className="font-bold text-gray-600">{title}</h3>
          <span className="text-[#FFB30E]">{rating}</span>
        </div>
      </div>
      <div>
        {isOpen ? (
          <span className="text-[#79B93C] bg-green-100 px-4 py-2 rounded-lg font-bold">
            Open
          </span>
        ) : (
          <span className="text-secondary bg-secondary/5 px-4 py-2 rounded-lg font-bold">
            Closed
          </span>
        )}
      </div>
    </div>
  );
}
