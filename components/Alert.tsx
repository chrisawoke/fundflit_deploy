import { useState, useEffect } from "react";
import errorIcon from "@/public/assets/error.svg";
import warningIcon from "@/public/assets/warning.svg";
import successIcon from "@/public/assets/success.svg";
import Image from "next/image";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface AlertProps {
  severity: "error" | "warning" | "success";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ severity, message }) => {
  const alertColorClasses = {
    error: "bg-[#160B0B] text-[#F4C7C7]",
    warning: "bg-[#101418] text-[#FFE2B7]",
    success: "bg-[#101418] text-[#CCE8CD]",
  };

  const positionClasses = {
    sm: "bottom-0 w-full",
    "md-up": "bottom-0 left-0",
  };

  const iconMap = {
    error: errorIcon,
    warning: warningIcon,
    success: successIcon,
  };

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div
      className={`fixed ${positionClasses.sm} md:${positionClasses["md-up"]} ${
        alertColorClasses[severity]
      } p-6 text-center transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex gap-1 items-center justify-center text-lg">
        <Image src={iconMap[severity]} alt={severity} className="w-4 h-4" />
        {message}
      </div>
    </div>
  );
};

export default Alert;
