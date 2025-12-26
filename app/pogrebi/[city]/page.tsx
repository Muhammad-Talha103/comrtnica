import React, { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "../../components/appcomponents/Layout";
import PogrebiListContent from "../PogrebiListContent";
import { slugToCity } from "@/utils/citySlug";
import { APP_BASE_URL } from "@/config/apiConfig";

export const dynamic = "force-dynamic";

const cityMetadata = {
  "ljubljana": {
    title: "Pogrebi v občini Ljubljana | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Ljubljana. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Ljubljani",
  },
  "maribor": {
    title: "Pogrebi v občini Maribor | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Maribor. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Mariboru",
  },
  "celje": {
    title: "Pogrebi v občini Celje | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Celje. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Celju",
  },
  "kranj": {
    title: "Pogrebi v občini Kranj | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Kranj. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Kranju",
  },
  "koper": {
    title: "Pogrebi v občini Koper | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Koper. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Kopru",
  },
  "novo-mesto": {
    title: "Pogrebi v občini Novo mesto | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Novo mesto. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Novem mestu",
  },
  "domzale": {
    title: "Pogrebi v občini Domžale | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Domžale. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Domžale",
  },
  "velenje": {
    title: "Pogrebi v občini Velenje | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Velenje. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Velenje",
  },
  "nova-gorica": {
    title: "Pogrebi v občini Nova Gorica | Osmrtnica.com",
    description: "Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini Nova Gorica. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.",
    h1: "Pogrebi v Novi Gorici",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const cityData = citySlug in cityMetadata ? cityMetadata[citySlug as keyof typeof cityMetadata] : null;

  if (cityData) {
    return {
      title: cityData.title,
      description: cityData.description,
      alternates: {
        canonical: `${APP_BASE_URL}/pogrebi/${resolvedParams.city}`,
      },
    };
  }

  const cityName = slugToCity(resolvedParams.city);
  return {
    title: `Pogrebi v občini ${cityName} | Osmrtnica.com`,
    description: `Pregled vseh pogrebov v naslednjih dneh po pokopališčih v občini ${cityName}. Vpišite se v žalno knjigo, dodajte sožalje in delite spomine.`,
    alternates: {
      canonical: `${APP_BASE_URL}/pogrebi/${resolvedParams.city}`,
    },
  };
}

export default async function CityPogrebiList({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const cityData = citySlug in cityMetadata ? cityMetadata[citySlug as keyof typeof cityMetadata] : null;
  const h1Text = cityData?.h1 || "Pogrebi v naslednjih dneh";

  return (
    <Layout
      megaMenu={""}
      isMegaMenuVisible={false}
      from={"18"}
      currentPage="pogrebi"
      forFooter={"memorypage"}
    >
      <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <PogrebiListContent cityParam={slugToCity(resolvedParams.city)} h1Text={h1Text} />
        </Suspense>
      </div>
    </Layout>
  );
}
