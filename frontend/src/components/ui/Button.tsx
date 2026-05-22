import React from "react";

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) => {
  const baseStyle = "px-6 py-3 rounded-2xl font-medium transition-all duration-200 active:scale-95";
  
  const variantStyle =
    variant === "primary"
      ? "bg-[#7B1D3F] text-white hover:bg-[#5a152e] shadow-md"
      : "border-2 border-[#7B1D3F] text-[#7B1D3F] hover:bg-[#7B1D3F]/10";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {label || children}
    </button>
  );
};

export default Button;