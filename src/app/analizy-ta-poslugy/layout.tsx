import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Аналізи та послуги | Лабораторія Діамеб",
  description: "Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.",
  
  openGraph: {
    title: 'Аналізи та послуги',
    description: 'Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.',
  }
};

export default function AnalizyTaPoslugyLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
