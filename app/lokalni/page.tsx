"use client";

import React, { Suspense, useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/appcomponents/Layout";
import LocalPartnersBanner from "../components/appcomponents/LocalPartnersBanner";
import CommonFooter from "../components/appcomponents/CommonFooter";
import NewsPartnersComponent from "../components/appcomponents/NewsPartners";
import PartnersContactSection from "../components/appcomponents/PartnersContactSection";
import RegionalPartnersSection from "../components/appcomponents/RegionalPartnersSection";
import PartnersServicesSection from "../components/appcomponents/PartnersServicesSection";
import categoryService from "@/services/category-service";

const LokalniContent = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [screen, setScreen] = useState<string | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width < 744) {
      setScreen("mobile");
    } else if (width <= 1279) {
      setScreen("tablet");
    } else {
      setScreen("desktop");
    }
  }, [width]);

  const [categories, setCategories] = useState<any[]>([]);
  const [activeSection, setActiveSection] = useState("region");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await categoryService.getAllCategories();
      setCategories(Array.isArray(response) ? response : []);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <LocalPartnersBanner
        label={"LOKALNI PARTNERJI"}
        categories={categories}
      />
      <div className="flex flex-col mx-auto justify-center items-center w-full">
        <NewsPartnersComponent />
        <PartnersServicesSection
          categories={categories}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <RegionalPartnersSection
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <PartnersContactSection />
      </div>

      <CommonFooter currentPage="/lokalni" />
    </>
  );
};

const ObituaryList = () => {
  return (
    <>
      <Head>
        <title>Pogrebna podjetja | Lokalni</title>
        <link rel="canonical" href="https://www.osmrtnica.com/lokalni" />
        <meta
          name="description"
          content="Pregled lokalnih pogrebna podjetja."
        />
      </Head>

      <Layout
        megaMenu={""}
        isMegaMenuVisible={false}
        from={"18"}
        currentPage="lokalni"
        forFooter={"memorypage"}
      >
        <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <LokalniContent />
          </Suspense>
        </div>
      </Layout>
    </>
  );
};

export default ObituaryList;
