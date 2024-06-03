import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Про лабораторію | Лабораторія Діамеб",
  description: "Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.",
  
  openGraph: {
    title: 'Лабораторія Діамеб',
    description: 'Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.',
  }
};

export default function ProLaboratoriyuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
