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
      <body
        className={inter.className}
        style={{
          margin: 0,
          padding: 0,
          height: "100vh",
          background: "linear-gradient(135deg, #a4ff73 10%, #fff9d2)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
