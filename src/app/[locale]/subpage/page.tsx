import { Metadata } from "next";
import React from "react";
import ClientComponent from "../../../components/clientComponent";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("common");

  return {
    title: t("subpage-title"),
    description: "Test of metadata in Next.js",
    openGraph: {
      title: t("subpage-title"),
      description: "Test of metadata in Next.js",
    },
  };
}

const Subpage: React.FC = () => {
  return (
    <>
      <ClientComponent />
      <p>I am a subpage.</p>
      <a href="/">Return to homepage</a>
    </>
  );
};

export default Subpage;
