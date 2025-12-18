import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primerjava storitev in funkcionalnosti | Osmrtnica.com",
  description: "Pregled in primerjava različnih funkcionalnosti portala Osmrtnica.com – žalne strani, spominske strani, QR kode, digitalne kartice in dodatne storitve.",
  alternates: {
    canonical: "https://www.osmrtnica.com/primerjava",
  },
};

export default function PrimerjavaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

