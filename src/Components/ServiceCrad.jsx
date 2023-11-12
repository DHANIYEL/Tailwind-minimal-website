const ServiceCrad = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:2-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
    </div>
  );
};

export default ServiceCrad;
