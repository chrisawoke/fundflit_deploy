import Image from "next/image";

type FeaturesCardsProps = {
  imgURL: string;
  label: string;
  subtext: string;
};

const FeaturesCards = ({ imgURL, label, subtext }: FeaturesCardsProps) => {
  return (
    <div className="flex w-full h-full flex-grow flex-col rounded-[10px] border-b-4 border-transparent px-5 py-12 shadow-3xl transition-all hover:scale-105 hover:border-green-500">
     <div>
     <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="text-3xl mt-5 font-bold leading-normal">{label}</h3>
     </div>
     
      <p className="font-montserrat text-slate-gray mt-3 break-words text-[16px] leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default FeaturesCards;
