import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-3xl text-ink-100 sm:text-4xl">
        This workflow doesn't exist.
      </h1>
      <p className="mt-4 max-w-sm text-ink-300">
        The page you're looking for was moved, renamed, or never built.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </div>
  );
}
