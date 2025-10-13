"use client";
import MemoryHeroSection from "../../../components/MemoryHeroSection";
import Layout from "@/app/components/appcomponents/Layout";
import { Suspense, useEffect } from "react";
import { useState } from "react";

import imgUp from "@/public/ico_up.png";
import Image from "next/image";
import obituaryService from "@/services/obituary-service";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { getTemplateCardImages } from "@/utils/commonUtils";
import { useAuth } from "@/hooks/useAuth";
import Head from "next/head";
import Link from "next/link";

const FbPosting = ({ params }) => {
  const { slugKey } = params;
  const router = useRouter();
  const searchParams = useSearchParams();

  const { user, isLoading } = useAuth();

  const [currentUser, setCurrentUser] = useState(null);

  const [obituary, setObituary] = useState({});

  const city = searchParams.get("city");
  const region = searchParams.get("region");

  useEffect(() => {
    fetchMemory();
  }, [user, isLoading]);

  const fetchMemory = async () => {
    try {
      const response = await obituaryService.getMemory({ slugKey: slugKey });

      if (response.error) {
        // toast.error(
        //   response.error || "Prišlo je do napake."
        // );
        return;
      }

      setObituary(response.obituary);

      if (response?.obituary) {
        const visitRespone = await obituaryService.updateObituaryVisits({
          obituaryId: response?.obituary?.id,
          userId: currentUser?.id || null,
        });

        if (visitRespone.error) {
          // toast.error(
          //   visitRespone.error || "Prišlo je do napake."
          // );
          return;
        }

        // setObituary(visitRespone);
        if (visitRespone.Condolences.length === 0) {
          const persons = [
            {
              name: "osmrtnica.com",
              createdTimestamp: new Date(),
              relation: "",
              message: "Počivaj v miru",
            },
          ];
          updateObituary({ ["Condolences"]: persons });
        }
      }
    } catch (err) {
      console.error("Error fetching obituary:", err);
      // toast.error(err.message || "Failed to fetch obituary.");
    }
  };

  const updateObituary = (updatedData) => {
    setObituary((prevObituary) => ({
      ...prevObituary,
      ...updatedData,
    }));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleFacebookShare = () => {
    // const url = `${window.location.origin}/m/${slugKey}`;
    // const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    //   url
    // )}`;
    // const width = 600;
    // const height = 500;
    // const left = (window.innerWidth - width) / 2;
    // const top = (window.innerHeight - height) / 2;
    // window.open(
    //   shareUrl,
    //   "facebook-share-dialog",
    //   `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`
    // );
  };

  return (
    <div>
      <Head>
        <meta property="og:title" content="Vpis v žalno knjigo" />
        <meta
          property="og:description"
          content="Vpis v žalno knjigo in informacije o pogrebu so tukaj."
        />
        <meta
          property="og:image"
          content={`https://www.osmrtnica.com/fb-preview-images/${slugKey}.jpg`}
        />
        <meta
          property="og:url"
          content={`https://www.osmrtnica.com/m/${slugKey}/fb-posting`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <Layout from={"3"} forFooter={"memorypage"}>
        <MemoryHeroSection
          handleFacebookShare={handleFacebookShare}
          obituary={obituary}
          href={`/m/${slugKey}`}
        />
      </Layout>
    </div>
  );
};

export default FbPosting;
