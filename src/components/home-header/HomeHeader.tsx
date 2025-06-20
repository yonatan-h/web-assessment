export default function HomeHeader() {
  return (
    <header className="flex justify-between p-4">
      <a href="/" className="font-bold text-2xl">
        <span className="text-secondary">Food</span>
        <span className="text-primary">Wagen</span>
      </a>
      <button className="bg-primary py-2 px-4 rounded-lg text-white font-bold">
        Add Meal
      </button>
    </header>
  );
}
