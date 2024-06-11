export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <>{searchParams.message}</>;
}
