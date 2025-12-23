import React, { Suspense } from "react";
import FuneralsComp from '../../comps/Pograbi';
import Breadcrumbs from "../components/appcomponents/Breadcrumbs";
import { APP_BASE_URL } from "@/config/apiConfig";


export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
  return {
    title: "Pogrebna podjetja po regijah v Sloveniji | Osmrtnica.com",
    description: "Seznam pogrebnih podjetij po regijah s kontaktnimi podatki in povezavo do njihovih spletnih strani. Pridružite se in postanite partner platforme osmrtnica.com",
    alternates: {
      canonical: `${APP_BASE_URL}/pogrebna-p`,
    },
  };
}

const FuneralsList = () => {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domov",
        item: `${APP_BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pogrebna podjetja",
        item: `${APP_BASE_URL}/pogrebna-p`,
      },
    ],
  };

  return (
    <div className="flex flex-1 flex-col bg-[#F5F7F9]">
      <Breadcrumbs
        items={[
          { label: "Domov", href: "/" },
          { label: "Pogrebna podjetja" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <FuneralsComp />
      </Suspense>
    </div>
  );
};

export default FuneralsList;
