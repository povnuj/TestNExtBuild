import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Акції | Лабораторія Діамеб",
  description: "Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.",
  
  openGraph: {
    title: 'Акції',
    description: 'Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.',
  }
};

export default function PromotionsLayout({
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
