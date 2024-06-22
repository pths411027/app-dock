import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>App Dock</title>
        <link rel="icon" type="image/x-icon" href="/favicon.io" />
        <meta name="description" content="App Dock like mac os" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
