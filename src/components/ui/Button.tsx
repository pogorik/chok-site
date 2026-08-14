import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
};

export default function Button({
  children,
  href = "#",
  onClick,
  variant = "primary",
  size = "lg",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[28px] font-semibold transition-all duration-[250ms] ease-out cursor-pointer";

  const sizes = {
    md: "h-12 px-7 text-[14px]",
    lg: "h-[54px] px-8 text-[15px]",
  };

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-dark active:bg-accent-dark",
    outline: "bg-white text-accent border-2 border-accent hover:bg-surface",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
