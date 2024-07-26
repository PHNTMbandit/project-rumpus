"use client";

export default function GameError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <h4>Game could not be found.</h4>;
}
