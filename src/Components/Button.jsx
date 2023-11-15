const Button = ({ label, iconURL, fullwidth }) => {
  return (
    <button
      className={`flex justify-center text-lg items-center gap-2 py-4 px-7 bg-coral-red border-coral-red rounded-full font-montserrat text-white ${
        fullwidth && "w-full"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Button icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
