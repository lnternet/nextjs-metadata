import { Metadata } from "next";
import React from "react";
import ClientComponent from "../../components/clientComponent";

export const metadata: Metadata = {
  title: "Subpage | nextjs-metadata",
  description: "This is metadata of subpage.",
  openGraph: {
    title: "Subpage | nextjs-metadata",
    description: "This is metadata of subpage.",
  },
};

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
