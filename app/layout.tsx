import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App dock",
  description: "marcus ui portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
