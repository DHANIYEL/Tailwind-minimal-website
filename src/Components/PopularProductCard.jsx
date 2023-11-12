const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex felx-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
    </div>
  );
};

export default PopularProductCard;
