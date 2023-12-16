import { Metadata } from "next";
import React from "react";

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
      <p>I am a subpage.</p>
      <a href="/">Return to homepage</a>
    </>
  );
};

export default Subpage;
