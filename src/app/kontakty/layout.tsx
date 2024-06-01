import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Контакти | Лабораторія Діамеб",
  description: "Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.",
  
  openGraph: {
    title: 'Контакти',
    description: 'Медична лабораторія “ДІАМЕБ” – це сучасна діагностична лабораторія з понад 10-річним досвідом роботи.',
  }
};

export default function ContactsLayout({
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
