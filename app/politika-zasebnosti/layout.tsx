import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pravila zasebnosti | Osmrtnica.com",
  description: "Pravila zasebnosti portala Osmrtnica.com in uporaba piškotkov za izboljšanje uporabniške izkušnje.",
  alternates: {
    canonical: "https://www.osmrtnica.com/politika-zasebnosti",
  },
};

export default function PolitikaZasebnostiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

