import React, { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "../components/appcomponents/Layout";
import LokalniContent from "./LokalniContent";
import Breadcrumbs from "../components/appcomponents/Breadcrumbs";
import { APP_BASE_URL } from "@/config/apiConfig";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }: { searchParams?: Promise<{ city?: string | string[]; region?: string | string[] }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const city = typeof resolvedSearchParams?.city === 'string' ? resolvedSearchParams.city : Array.isArray(resolvedSearchParams?.city) ? resolvedSearchParams.city[0] : "";
  
  return {
    title: "Lokalni partnerji in oglaševalci | Osmrtnica.com",
    description: "Predstavitev lokalnih podjetij in partnerjev, ki opravljajo dela v zvezi s pogrebnimi slovesnostmi ter predstavitev njihovih produktov in storitev",
    alternates: {
      canonical: city ? `${APP_BASE_URL}/lokalni?city=${encodeURIComponent(city)}` : `${APP_BASE_URL}/lokalni`,
    },
  };
}

export default async function ObituaryList({ searchParams }: { searchParams?: Promise<{ city?: string | string[]; region?: string | string[] }> }) {
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
        name: "Lokalni partnerji",
        item: `${APP_BASE_URL}/lokalni`,
      },
    ],
  };

  return (
    <Layout
      megaMenu={""}
      isMegaMenuVisible={false}
      from={"18"}
      currentPage="lokalni"
      forFooter={"memorypage"}
    >
      <div className="flex flex-col mx-auto bg-[#F9EBD466] w-full">
        <Breadcrumbs
          items={[
            { label: "Domov", href: "/" },
            { label: "Lokalni partnerji" },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <LokalniContent />
        </Suspense>
      </div>
    </Layout>
  );
}
