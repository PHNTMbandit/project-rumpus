import { Header } from "@/components/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen p-6">
      <Header />
      {children}
    </div>
  );
}
