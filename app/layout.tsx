import { Open_Sans as FontSans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Project Rumpabase",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={GeistSans.className}>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-background text-foreground",
          fontSans.variable
        )}>
        <main className="min-h-screen flex flex-col items-center">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
