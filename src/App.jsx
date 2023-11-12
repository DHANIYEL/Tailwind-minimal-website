import CustomerReview from "./Sections/CustomerReview";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import PopularProduct from "./Sections/PopularProduct";
import Services from "./Sections/Services";
import SpecialOffers from "./Sections/SpecialOffers";
import Subscribe from "./Sections/Subscribe";
import SuperQuality from "./Sections/SuperQuality";
import Nav from "./Components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 padding">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black text-white">
      <Footer />
    </section>
  </main>
);

export default App;
