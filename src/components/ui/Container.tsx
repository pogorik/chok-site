import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-[94%] max-w-[1480px] ${className}`}>
      {children}
    </div>
  );
}
