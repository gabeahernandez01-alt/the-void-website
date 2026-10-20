import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="font-mono text-xs uppercase tracking-widest text-acid">VØID_SYSTEM / FAULT</p>
      <h1 className="font-display text-5xl uppercase">Signal lost</h1>
      <p className="max-w-md font-mono text-sm break-words text-muted">{errorMessage(error)}</p>
    </main>
  );
}
