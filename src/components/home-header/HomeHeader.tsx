import AddMealModal from "../add-meal-modal/AddMealModal";

export default function HomeHeader() {
  return (
    <header className=" p-4 max-w-[1200px] mx-auto">
      <div className="flex justify-between">
        <a href="/" className="font-bold text-2xl">
          <span className="text-secondary">Food</span>
          <span className="text-primary">Wagen</span>
        </a>
        <AddMealModal/>
      </div>
    </header>
  );
}
