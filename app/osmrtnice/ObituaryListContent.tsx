"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import NextFunerals from "../components/appcomponents/NextFunerals";
import ObituaryListComponent from "../components/appcomponents/ObituaryListComponent";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import MemorialPageView from "../components/appcomponents/MemorialPageView";
import CommonFooter from "../components/appcomponents/CommonFooter";

/* =======================
   Obituary Model
======================= */
export interface Obituary {
  id: string;
  firstName: string;
  lastName: string;
  dateOfDeath: string;
  city?: string;
  imageUrl?: string;
}

/* =======================
   Props Type
======================= */
interface ObituaryListContentProps {
  cityParam?: string;
  h1Text?: string;
  initialObituaries?: Obituary[];
}

/* =======================
   Component
======================= */
const ObituaryListContent: React.FC<ObituaryListContentProps> = ({
  cityParam,
  h1Text,
  initialObituaries = [],
}) => {
  const searchParams = useSearchParams();

  const region = searchParams.get("region");
  const city = cityParam ?? searchParams.get("city");
  const displayH1 = h1Text ?? "Zadnje osmrtnice";

  return (
    <>
      <ObituaryListBanner
        image="/cvetje.avif"
        label="Osmrtnice"
        alt="osmrtnice ozadje"
        h1Text={displayH1}
      />

      <ObituaryListComponent
        city={city}
        initialObituaries={initialObituaries}
      />

      <NextFunerals />
      <MemorialPageView />

      <SponsorComponent
        text="To stran so omogočili "
        region={region}
        city={city}
      />

      <CommonFooter currentPage="/osmrtnice" />
    </>
  );
};

export default ObituaryListContent;
