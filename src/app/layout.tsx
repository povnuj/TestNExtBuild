import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./theme/theme";
import NavBar from "./components/Nav/NavBar";
import StoreProvider from "@/store/StoreProvider";

export const metadata: Metadata = {
  title: "Головна | Лабораторія Діамеб",
  description: "Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.",
  
  openGraph: {
    title: 'Лабораторія Діамеб',
    description: 'Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <StoreProvider>
            <NavBar />
            {children}
          </StoreProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
