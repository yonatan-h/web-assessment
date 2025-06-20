export default function Home() {
  return (
    <div className="">
      <header className="flex justify-between p-4">
        <a href="/">
          <span>food</span>
          <span>wagen</span>
        </a>
        <button>add meat</button>
      </header>
      <main>
        <section>
          <div>
            <h2>Are you starving?</h2>
            <p>Within a few clicks, find meals that are accessible near you</p>
            <div>
              <div>
                <button>Delivery</button>
                <button>Pickup</button>
              </div>
              <form>
                <input
                  type="text"
                  placeholder="What do you like to eat today?"
                />
                <button>Find A Meal</button>
              </form>
            </div>
          </div>
          <div>image</div>
        </section>
        <section>
          <h2>Featured Meals</h2>
          <p>handle empty</p>
          <div>
            <MealCard
              price={4.99}
              title="Bow Lasagna"
              rating={4.6}
              isOpen={false}
              mainImage={
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alibaba.com%2Fproduct-detail%2FNew-Kitchen-Multifunctional-Meat-Grinder-Baby_1600982475250.html&psig=AOvVaw02Xn6RwgBscbvPsiJMjvFv&ust=1750494227767000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODCmKfJ_40DFQAAAAAdAAAAABAE"
              }
              logoImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vexels.com%2Ficon%2Flogo-maker%2F&psig=AOvVaw1tZt28VpGXclKtP-R50FsK&ust=1750494273041000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjTnr7J_40DFQAAAAAdAAAAABAE"
              restaurantName="Bow"
            />

            <MealCard
              price={4.99}
              title="Bow Lasagna"
              rating={4.6}
              isOpen={false}
              mainImage={
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alibaba.com%2Fproduct-detail%2FNew-Kitchen-Multifunctional-Meat-Grinder-Baby_1600982475250.html&psig=AOvVaw02Xn6RwgBscbvPsiJMjvFv&ust=1750494227767000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODCmKfJ_40DFQAAAAAdAAAAABAE"
              }
              logoImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vexels.com%2Ficon%2Flogo-maker%2F&psig=AOvVaw1tZt28VpGXclKtP-R50FsK&ust=1750494273041000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjTnr7J_40DFQAAAAAdAAAAABAE"
              restaurantName="Bow"
            />

            <MealCard
              price={4.99}
              title="Bow Lasagna"
              rating={4.6}
              isOpen={false}
              mainImage={
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alibaba.com%2Fproduct-detail%2FNew-Kitchen-Multifunctional-Meat-Grinder-Baby_1600982475250.html&psig=AOvVaw02Xn6RwgBscbvPsiJMjvFv&ust=1750494227767000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODCmKfJ_40DFQAAAAAdAAAAABAE"
              }
              logoImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vexels.com%2Ficon%2Flogo-maker%2F&psig=AOvVaw1tZt28VpGXclKtP-R50FsK&ust=1750494273041000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjTnr7J_40DFQAAAAAdAAAAABAE"
              restaurantName="Bow"
            />
          </div>
        </section>
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

interface Meal {
  price: number;
  title: string;
  rating: number;
  isOpen: boolean;
  mainImage: string;
  logoImage: string;
  restaurantName: string;
}
function MealCard({
  price,
  title,
  rating,
  isOpen,
  mainImage,
  logoImage,
  restaurantName,
}: Meal) {
  return (
    <div className="relative">
      <div className="absolute top-3 left-3">
        <span>{price}</span>
      </div>
      <img src={mainImage} alt={title} />
      <div>
        <img src={logoImage} alt={`${restaurantName}`} />
        <div>
          <h3>{title}</h3>
          <span>{rating}</span>
        </div>
      </div>
      <div>{isOpen ? <span>Open</span> : <span>Closed</span>}</div>
    </div>
  );
}
