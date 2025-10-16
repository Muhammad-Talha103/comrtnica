import React, { Suspense } from "react";
import FuneralsComp from '../../comps/Pograbi';
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Pogrebna podjetja | Osrmtnica",
  description: "Seznam pogrebnih podjetij v Sloveniji. Poiščite zaupanja vredno pogrebno podjetje v vaši bližini.",
  alternates: {
    canonical: "https://www.osmrtnica.com/pogrebna-p",
  },
};

const FuneralsList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FuneralsComp />
    </Suspense>
  );
};

export default FuneralsList;
