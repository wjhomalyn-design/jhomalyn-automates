import Link from "next/link";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-electric-400";

const variants = {
  primary:
    "bg-electric-500 text-white shadow-glow hover:bg-electric-600 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]",
  ghost:
    "border border-white/[0.12] text-ink-100 hover:border-electric-400/50 hover:bg-white/[0.04]",
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", icon } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        download={props.download}
        target={props.target}
        rel={props.rel}
        className={classes}
      >
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonAsButton).type ?? "button"}
      onClick={(props as ButtonAsButton).onClick}
      className={classes}
    >
      {children}
      {icon}
    </button>
  );
}
