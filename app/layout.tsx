import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";

const roboto  = Roboto({ 
  weight: '400',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Kevin Rad Poquita",
  description: "Developer, creator and learner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="en"
    className={roboto.className}
    >
      <body className="max-w-2xl mb-40 flex flex-col md:flex-row mx-4 lg:mx-auto">
        <main className="flex-auto min-w-0 pt-8 flex flex-col px-2 md:px-0 ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
