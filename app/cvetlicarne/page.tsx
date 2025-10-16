import React, { Suspense } from "react";
import CveltComp from "../../comps/CveltComp";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Cvetličarne | Osrmtnica",
  description: "Pregled cvetličarn in cvetličnih storitev po Sloveniji. Poiščite najbližjo cvetličarno za pogrebne storitve.",
  alternates: {
    canonical: "https://www.osmrtnica.com/cvetlicarne",
  },
};

const FloristsListPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CveltComp />
    </Suspense>
  );
};

export default FloristsListPage;
