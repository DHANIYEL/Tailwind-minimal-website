import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text text-center max-w-sm mt-6 ">{feedback}</p>
      <div className="flex items-center mt-3">
        <img src={star} width={24} height={24} className="m-0 object-contain" />
        <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
      </div>
      <h3 className="font-bold text-3xl font-palanquin text-center mt-1">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
