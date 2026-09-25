import { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`glass ${hover ? "glass-hover" : ""} ${className}`}>
      {children}
    </div>
  );
}
