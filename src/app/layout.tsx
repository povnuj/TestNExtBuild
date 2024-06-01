import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./component/ThemeRegistry";
import NavBar from "./component/Nav/NavBar";
import { UiStatesProvider } from "@/context/Ui-States";

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
      <UiStatesProvider>
        <ThemeRegistry>
          <body suppressHydrationWarning={true}>
            <NavBar />
            {children}
          </body>
        </ThemeRegistry>
      </UiStatesProvider>
    </html>
  );
}
