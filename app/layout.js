import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MaterialThemeProvider from "@/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js 15 + MUI 6 Starter Boilerplate",
  description:
    "Kickstart your project effortlessly with Next.js 15 and MUI 6 fully integrated—custom themes, dark mode, and optimized setup so you can focus on building.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <MaterialThemeProvider>{children}</MaterialThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
