import { useState } from "react";
import heroImg from "../../assets/hero-image.png";
import TabButton from "./TabButton";

export default function HeroSection() {
  const [isDelivery, setIsDelivery] = useState(true);
  return (
    <section className="bg-primary py-12 flex flex-col gap-12 px-6">
      <div className="flex flex-col gap-3 text-white">
        <h2 className="text-5xl font-bold text-white">Are you starving?</h2>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div className="bg-white p-6 rounded-2xl mt-3 flex flex-col gap-6">
          <div className="flex gap-3">
            <TabButton
              isSelected={isDelivery}
              onClick={() => setIsDelivery(true)}
              text="Delivery"
            />

            <TabButton
              isSelected={!isDelivery}
              onClick={() => setIsDelivery(false)}
              text="Pickup"
            />
          </div>
          <form className="flex gap-3">
            <input
              className="flex-1 border border-gray-200  p-3 rounded-lg bg-gray-100"
              type="text"
              placeholder="What do you like to eat today?"
            />
            <button className="bg-secondary px-3 rounded-lg font-bold">
              Find A Meal
            </button>
          </form>
        </div>
      </div>
      <img src={heroImg} className="max-w-[500px] " />
    </section>
  );
}
