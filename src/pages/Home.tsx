import sampleFoodImg from "../assets/sample-food.png";
import sampleLogoImg from "../assets/sample-logo.png";
import FeaturedMeals from "../components/featured-meals/FeaturedMeals";
import HeroSection from "../components/hero-section/HeroSection";
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
          ]}
        />
        <button>LoadMore</button>
      </main>
      <footer>
        <div>
          <nav>
            <div>
              <FooterColumn
                title="Company"
                links={[
                  { title: "About Us", link: "/about" },
                  { title: "Team", link: "/team" },
                  { title: "Careers", link: "/careers" },
                  { title: "Blog", link: "/blog" },
                ]}
              />
              <FooterColumn
                title="Contact"
                links={[
                  { title: "About Us", link: "/about" },
                  { title: "Team", link: "/team" },
                  { title: "Careers", link: "/careers" },
                  { title: "Blog", link: "/blog" },
                ]}
              />
              <FooterColumn
                title="Legal"
                links={[
                  { title: "About Us", link: "/about" },
                  { title: "Team", link: "/team" },
                  { title: "Careers", link: "/careers" },
                  { title: "Blog", link: "/blog" },
                ]}
              />
            </div>
          </nav>

          <div>
            <h2>Folow Us</h2>
            <div>social media links</div>

            <p>Receive exclusive offers in your mailbox</p>
            <form action="">
              <input type="email" placeholder="Enter Your email" name="email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div>
          <p>
            <span>All rights Reserved</span>
            <span>Your Company, 2021</span>
          </p>

          <p>Made with  by Themewagon</p>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; link: string }[];
}) {
  return (
    <div>
      <h2>{title}</h2>
      <li>
        {links.map(({ title, link }, index) => {
          return (
            <a href={link} key={link}>
              {title}
            </a>
          );
        })}
      </li>
    </div>
  );
}
