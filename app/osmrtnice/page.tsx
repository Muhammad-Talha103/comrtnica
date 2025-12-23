import React, { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "../components/appcomponents/Layout";
import ObituaryListContent from "./ObituaryListContent";
import { cityToSlug } from "@/utils/citySlug";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }: { searchParams?: Promise<{ city?: string | string[]; region?: string | string[] }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const city = typeof resolvedSearchParams?.city === 'string' ? resolvedSearchParams.city : Array.isArray(resolvedSearchParams?.city) ? resolvedSearchParams.city[0] : "";
  
  const cityRoutes: { [key: string]: string } = {
    "Ljubljana": "/osmrtnice/ljubljana",
    "Maribor": "/osmrtnice/maribor",
    "Celje": "/osmrtnice/celje",
    "Kranj": "/osmrtnice/kranj",
    "Koper": "/osmrtnice/koper",
    "Novo Mesto": "/osmrtnice/novo-mesto",
    "Domžale": "/osmrtnice/domzale",
    "Velenje": "/osmrtnice/velenje",
    "Nova Gorica": "/osmrtnice/nova-gorica",
  };
  
  const canonicalUrl = city && cityRoutes[city] 
    ? `https://www.osmrtnica.com${cityRoutes[city]}`
    : city 
      ? `https://www.osmrtnica.com/osmrtnice?city=${encodeURIComponent(city)}`
      : "https://www.osmrtnica.com/osmrtnice";
  
  return {
    title: city ? `Osmrtnice v ${city} – Žalne strani in spominske | Osmrtnica.com` : "Zadnje osmrtnice po Sloveniji | Osmrtnica.com",
    description: city 
      ? `Osmrtnice v ${city}. Celovit pregled osmrtnic z datumi pogrebov, pokopališči ter možnostjo iskanja po imenu, kraju ali regiji.`
      : "Pregled vseh osmrtnic s povezavo do njihove žalne/spominske strani. Osmrtnice na Gorenjskem, Dolenjskem, Pomurju, Goriškem, Zasavju, Primorskem, Notranjskem",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ObituaryList({ searchParams }: { searchParams?: Promise<{ city?: string | string[]; region?: string | string[] }> }) {
  return (
    <Layout
      megaMenu={""}
      isMegaMenuVisible={false}
      from={"18"}
      currentPage="osmrtnice"
      forFooter={"memorypage"}
    >
      <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <ObituaryListContent h1Text="Zadnje osmrtnice" />
        </Suspense>
      </div>
    </Layout>
  );
}
