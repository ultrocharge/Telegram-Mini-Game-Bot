import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Moon Moverz",
  description: "Moon Moverz Game Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: "url('/images/background.jpg')" }} className="w-full h-screen">
        {children}
      </body>
    </html>
  );
}
