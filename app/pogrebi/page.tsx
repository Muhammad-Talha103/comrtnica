import { APP_BASE_URL } from "@/config/apiConfig";
import type { Metadata } from "next";
import { Suspense } from "react";
import Layout from "../components/appcomponents/Layout";
import PogrebiListContent from "./PogrebiListContent";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ city?: string | string[] }>;
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const city =
    typeof resolvedSearchParams?.city === "string"
      ? resolvedSearchParams.city
      : Array.isArray(resolvedSearchParams?.city)
      ? resolvedSearchParams.city[0]
      : "";

  const cityRoutes: { [key: string]: string } = {
    Ljubljana: "/pogrebi/ljubljana",
    Maribor: "/pogrebi/maribor",
    Celje: "/pogrebi/celje",
    Kranj: "/pogrebi/kranj",
    Koper: "/pogrebi/koper",
    "Novo Mesto": "/pogrebi/novo-mesto",
    Domžale: "/pogrebi/domzale",
    Velenje: "/pogrebi/velenje",
    "Nova Gorica": "/pogrebi/nova-gorica",
  };

  const canonicalUrl =
    city && cityRoutes[city]
      ? `${APP_BASE_URL}${cityRoutes[city]}`
      : city
      ? `${APP_BASE_URL}/pogrebi?city=${encodeURIComponent(city)}`
      : `${APP_BASE_URL}/pogrebi`;

  return {
    title: city
      ? `Pogrebi v ${city} – Pregled pogrebov po dnevih`
      : "Pogrebi v naslednjih dneh | Osmrtnica.com",
    description: city
      ? `Pogrebi v ${city} v naslednjih dneh. Pregled datumov in časov pogrebov po dnevih z možnostjo iskanja po imenu, kraju ali regiji.`
      : "Pregled vseh pogrebov danes in jutri po pokopališčih po vsej Sloveniji. Pogrebi na Gorenjskem, Dolenjskem, Pomurju, Goriškem, Zasavju, Primorskem, Notranjskem.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ObituaryList({
  searchParams,
}: {
  searchParams?: Promise<{
    city?: string | string[];
    region?: string | string[];
  }>;
}) {
  return (
    <Layout
      megaMenu={""}
      isMegaMenuVisible={false}
      from={"18"}
      forFooter={"memorypage"}
      currentPage="pogrebi"
    >
      <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <PogrebiListContent h1Text="Pogrebi v naslednjih dneh" />
        </Suspense>
      </div>
    </Layout>
  );
}
