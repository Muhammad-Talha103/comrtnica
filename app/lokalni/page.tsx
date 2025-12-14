import React, { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "../components/appcomponents/Layout";
import LokalniContent from "./LokalniContent";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }: { searchParams?: Promise<{ city?: string | string[]; region?: string | string[] }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const city = typeof resolvedSearchParams?.city === 'string' ? resolvedSearchParams.city : Array.isArray(resolvedSearchParams?.city) ? resolvedSearchParams.city[0] : "";
  const cityText = city ? ` v ${city}` : "";
  
  return {
    title: city ? `Lokalni izvajalci in partnerji v ${city} | Osmrtnica.com` : "Lokalni izvajalci in partnerji | Osmrtnica.com",
    description: "Lokalni izvajalci in partnerji s slikami storitev ter neposrednimi povezavami do spletnih strani. Kamnoseštvo, svečarstvo, graverstvo, QR kode za nagrobnike, prevozi pokojnih, sedmine, govorniki.",
    alternates: {
      canonical: city ? `https://www.osmrtnica.com/lokalni?city=${encodeURIComponent(city)}` : "https://www.osmrtnica.com/lokalni",
    },
  };
}

export default async function ObituaryList({ searchParams }: { searchParams?: Promise<{ city?: string | string[]; region?: string | string[] }> }) {
  return (
    <Layout
      megaMenu={""}
      isMegaMenuVisible={false}
      from={"18"}
      currentPage="lokalni"
      forFooter={"memorypage"}
    >
      <div className="flex flex-col mx-auto bg-[#F9EBD466] w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <LokalniContent />
        </Suspense>
      </div>
    </Layout>
  );
}
