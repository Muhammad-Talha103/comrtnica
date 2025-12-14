import React, { Suspense } from "react";
import FuneralsComp from '../../comps/Pograbi';

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const region = typeof resolvedSearchParams?.region === 'string' ? resolvedSearchParams.region : Array.isArray(resolvedSearchParams?.region) ? resolvedSearchParams.region[0] : "";
  const regionText = region ? ` v ${region} regiji` : "";
  
  return {
    title: region ? `Pogrebna podjetja v ${region} regiji – Seznam podjetij | Osmrtnica.com` : "Pogrebna podjetja – Seznam podjetij | Osmrtnica.com",
    description: region
      ? `Osmrtnica.com - pogrebna podjetja v ${region} regiji. Pregled lokalnih izvajalcev storitev z naslovom in povezavo do spletne strani. Pridružite se kot partner.`
      : "Osmrtnica.com - pogrebna podjetja v Sloveniji. Pregled lokalnih izvajalcev storitev z naslovom in povezavo do spletne strani. Pridružite se kot partner.",
    alternates: {
      canonical: region ? `https://www.osmrtnica.com/pogrebna-p?region=${encodeURIComponent(region)}` : "https://www.osmrtnica.com/pogrebna-p",
    },
  };
}

const FuneralsList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FuneralsComp />
    </Suspense>
  );
};

export default FuneralsList;
