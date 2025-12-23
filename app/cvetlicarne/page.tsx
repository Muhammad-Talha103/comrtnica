import React, { Suspense } from "react";
import type { Metadata } from "next";
import CveltComp from "../../comps/CveltComp";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }: { searchParams?: Promise<{ city?: string | string[]; region?: string | string[] }> }): Promise<Metadata> {
  return {
    title: "Lokalne cvetličarne | Osmrtnica.com",
    description: "Seznam bližnjih cvetličarn z naslovom, telefonsko številko, e-pošto, povezavo do spletne strani in opisom prednosti napram velikim trgovinam.",
    alternates: {
      canonical: "https://www.osmrtnica.com/cvetlicarne",
    },
  };
}

const FloristsListPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CveltComp />
    </Suspense>
  );
};

export default FloristsListPage;
