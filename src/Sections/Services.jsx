import ServiceCrad from "../Components/ServiceCrad";
import { services } from "../Constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCrad key={index} {...service} />
      ))}
    </section>
  );
};

export default Services;
