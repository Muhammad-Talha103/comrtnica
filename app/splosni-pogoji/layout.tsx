import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Splošni pogoji | Osmrtnica.com",
  description: "Pregled pogojev uporabe portala Osmrtnica.com, pravice in obveznosti uporabnikov ter odgovornosti upravljavca.",
  alternates: {
    canonical: "https://www.osmrtnica.com/splosni-pogoji",
  },
};

export default function SplosniPogojiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

