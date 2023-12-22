import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("common");

  return {
    title: t("title"),
    description: "Test of metadata in Next.js",
    openGraph: {
      title: t("title"),
      description: "Test of metadata in Next.js",
    },
  };
}

const Home = () => {
  const t = useTranslations("common");

  return (
    <main>
      <h1>{t("title")}</h1>
      <p>
        This is a project to test Next.js Metadata API. It contains two pages -
        homepage and a subpage, each with different title and description
        metadata.
      </p>
      <a href={`subpage`}>Navigate to subpage</a>
    </main>
  );
};

export default Home;
