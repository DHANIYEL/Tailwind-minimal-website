import Button from "../Components/Button";
import { statistics } from "../Constants";
import { arrowRight } from "../assets/icons";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full max-container flex xl:flex-row flex-col justify-center min-h-screen gap-10 "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddinf-x pt-28">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="relative pr-10 z-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovatopn for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
