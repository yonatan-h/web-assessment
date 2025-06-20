import sampleFoodImg from "../assets/sample-food.png";
import sampleLogoImg from "../assets/sample-logo.png";
import FeaturedMeals from "../components/featured-meals/FeaturedMeals";
import HeroSection from "../components/hero-section/HeroSection";
import HomeFooter from "../components/home-footer/HomeFooter";
import HomeHeader from "../components/home-header/HomeHeader";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <main className="flex flex-col gap-12">
        <HeroSection />
        <FeaturedMeals
          meals={[
            {
              price: 4.99,
              title: "Bow Lasagna",
              rating: 4.6,
              isOpen: false,
              mainImage: sampleFoodImg,
              logoImage: sampleLogoImg,
              restaurantName: "Bow",
            },

            {
              price: 4.99,
              title: "Bow Lasagna",
              rating: 4.6,
              isOpen: false,
              mainImage: sampleFoodImg,
              logoImage: sampleLogoImg,
              restaurantName: "Bow",
            },

            {
              price: 4.99,
              title: "Lasagna Burger",
              rating: 5,
              isOpen: true,
              mainImage: sampleFoodImg,
              logoImage: sampleLogoImg,
              restaurantName: "Bow",
            },

            {
              price: 4.99,
              title: "Bow Lasagna",
              rating: 4.6,
              isOpen: true,
              mainImage: sampleFoodImg,
              logoImage: sampleLogoImg,
              restaurantName: "Bow",
            },

            {
              price: 4.99,
              title: "Bow Lasagna",
              rating: 4.6,
              isOpen: true,
              mainImage: sampleFoodImg,
              logoImage: sampleLogoImg,
              restaurantName: "Bow",
            },
          ]}
        />
        <div className="flex justify-center">
          <button className="px-6 py-3 text-white font-bold  bg-primary rounded-3xl">
            LoadMore
          </button>
        </div>
      </main>
      <div className="pt-12">
        <HomeFooter />
      </div>
    </div>
  );
}
