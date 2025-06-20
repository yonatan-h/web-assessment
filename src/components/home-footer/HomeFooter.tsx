import FooterColumn from "./FooterColumn";

export default function HomeFooter() {
  return (
    <footer className="bg-[#212121] text-white p-6 ">
      <div className="flex flex-col gap-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <nav>
            <div className="flex flex-wrap gap-12">
              <FooterColumn
                title="Company"
                links={[
                  { title: "About Us", link: "#" },
                  { title: "Team", link: "#" },
                  { title: "Careers", link: "#" },
                  { title: "Blog", link: "#" },
                ]}
              />
              <FooterColumn
                title="Contact"
                links={[
                  { title: "Help and Suport", link: "#" },
                  { title: "Partner With us", link: "#" },
                  { title: "Ride With us", link: "#" },
                ]}
              />
              <FooterColumn
                title="Legal"
                links={[
                  { title: "Terms and Conditions", link: "#" },
                  { title: "Refund and Cancelation", link: "#" },
                  { title: "Cookie Policy", link: "#" },
                ]}
              />
            </div>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="font-bold opacity-50">Follow Us</h2>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            </div>

            <p className="opacity-50 font-bold">
              Receive exclusive offers in your mailbox
            </p>
            <form className="flex gap-3">
              <input
                className="bg-gray-700 py-3 px-6 rounded-lg"
                type="email"
                placeholder="Enter Your email"
                name="email"
              />
              <button className="bg-primary p-3 rounded-lg font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-500 pt-6 text-gray-400 md:flex md:justify-between">
          <p className="flex gap-3">
            <span>All rights Reserved</span>
            <span>Your Company, 2021</span>
          </p>

          <p>
            Made with love by
            <span className="text-white"> Themewagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
