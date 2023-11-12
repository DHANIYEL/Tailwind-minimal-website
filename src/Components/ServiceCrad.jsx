const ServiceCrad = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:2-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="text-3xl leading-normal font-bold font-palanquin mt-5">
        {label}
      </h3>
      <p className="mt-3 leading-normal break-words text-slate-gray font-montserrat">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCrad;
