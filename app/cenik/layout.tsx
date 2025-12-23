import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenik za spominske strani in možnosti oglaševanja",
  description: "Cenik za spominske strani in informacije o možnostih oglaševanja za lokalne partnerje in cvetličarne na portalu Osmrtnica.com. Pridružite se.",
  alternates: {
    canonical: "https://www.osmrtnica.com/cenik",
  },
};

export default function CenikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

