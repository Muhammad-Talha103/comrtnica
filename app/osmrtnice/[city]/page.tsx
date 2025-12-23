import React, { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "../../components/appcomponents/Layout";
import ObituaryListContent from "../ObituaryListContent";
import { slugToCity } from "@/utils/citySlug";

export const dynamic = "force-dynamic";

const cityMetadata = {
  "ljubljana": {
    title: "Ljubljana - osmrtnice | Vse zadnje osmrtnice v Ljubljani",
    description: "Pregled vseh osmrtnic v Ljubljani s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Ljubljani",
  },
  "maribor": {
    title: "Maribor - osmrtnice | Vse zadnje osmrtnice v Mariboru",
    description: "Pregled vseh osmrtnic v Mariboru s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Mariboru",
  },
  "celje": {
    title: "Celje - osmrtnice | Vse zadnje osmrtnice v Celju",
    description: "Pregled vseh osmrtnic v Celju s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Celju",
  },
  "kranj": {
    title: "Kranj - osmrtnice | Vse zadnje osmrtnice v Kranju",
    description: "Pregled vseh osmrtnic v Kranju s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Kranju",
  },
  "koper": {
    title: "Koper - osmrtnice | Vse zadnje osmrtnice v Kopru",
    description: "Pregled vseh osmrtnic v Kopru s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Kopru",
  },
  "novo-mesto": {
    title: "Novo mesto - osmrtnice | Vse zadnje osmrtnice v Novem mestu",
    description: "Pregled vseh osmrtnic v Novem mestu s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Novem mestu",
  },
  "domzale": {
    title: "Domžale - osmrtnice | Vse zadnje osmrtnice v Domžalah",
    description: "Pregled vseh osmrtnic v Domžalah s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Domžalah",
  },
  "velenje": {
    title: "Velenje - osmrtnice | Vse zadnje osmrtnice v Velenju",
    description: "Pregled vseh osmrtnic v Velenju s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Velenju",
  },
  "nova-gorica": {
    title: "Nova Gorica - osmrtnice | Vse zadnje osmrtnice v Novi Gorici",
    description: "Pregled vseh osmrtnic v Novi Gorici s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.",
    h1: "Zadnje osmrtnice v Novi Gorici",
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
        canonical: `https://www.osmrtnica.com/osmrtnice/${resolvedParams.city}`,
      },
    };
  }

  const cityName = slugToCity(resolvedParams.city);
  return {
    title: `${cityName} - osmrtnice | Vse zadnje osmrtnice v ${cityName}`,
    description: `Pregled vseh osmrtnic v ${cityName} s povezavo do njihove žalne/spominske strani. Prevzemite digitalne kartice sožalja in brezplačne QR kode za nagrobnike.`,
    alternates: {
      canonical: `https://www.osmrtnica.com/osmrtnice/${resolvedParams.city}`,
    },
  };
}

export default async function CityObituaryList({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const cityData = citySlug in cityMetadata ? cityMetadata[citySlug as keyof typeof cityMetadata] : null;
  const h1Text = cityData?.h1 || "Zadnje osmrtnice";

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
          <ObituaryListContent cityParam={slugToCity(resolvedParams.city)} h1Text={h1Text} />
        </Suspense>
      </div>
    </Layout>
  );
}
