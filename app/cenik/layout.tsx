import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenik | Osmrtnica.com",
  description: "Pregled cen in paketov za uporabnike, cvetličarne in oglaševalce na portalu Osmrtnica.com",
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

