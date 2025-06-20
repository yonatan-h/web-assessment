import MealCard, { type Meal } from "./MealCard";

export default function FeaturedMeals({ meals }: { meals: Meal[] }) {
  return (
    <section className="flex flex-col gap-12 max-w-[1000px] px-6">
      <h2 className="text-3xl font-bold text-center">Featured Meals</h2>
      {meals.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {meals.map((meal) => (
            <MealCard
              price={meal.price}
              title={meal.title}
              rating={meal.rating}
              isOpen={false}
              mainImage={meal.mainImage}
              logoImage={meal.logoImage}
              restaurantName={meal.restaurantName}
            />
          ))}
        </div>
      )}

      {meals.length == 0 && (
        <p className="text-gray-500 text-center">No meals currently!</p>
      )}
    </section>
  );
}
