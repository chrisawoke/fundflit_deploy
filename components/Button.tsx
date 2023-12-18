import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string; //the question mark (?) indicates that it's optional.
  variant: "btn_dark_green" | "btn_green" | "btn_white_text";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-md border w-full ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
