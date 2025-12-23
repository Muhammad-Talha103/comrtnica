import HomeContent from "@/app/components/HomePage"
import { Suspense } from "react";

export default function Home(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent {...props} />
    </Suspense>
  );
}

export const metadata = {
  title: "Vse osmrtnice in pogrebi | Osmrtnica.com",
  description:
    "Osmrtnica.com | Pregled osmrtnic, pogrebov in spominskih strani po Sloveniji. Prižgite svečko, delite spomine, izrazite sožalje in ohranite spomin na najdražje.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Vse osmrtnice in pogrebi | Osmrtnica.com",
    description: "Osmrtnica.com | Pregled osmrtnic, pogrebov in spominskih strani po Sloveniji. Prižgite svečko, delite spomine, izrazite sožalje in ohranite spomin na najdražje.",
    siteName: "Osmrtnica",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Osmrtnica",
      },
    ],
  },
};