"use client";

import { useLocation } from "@/contexts/locationContext";
import React from "react";

const ClientComponent: React.FC = () => {
  console.log("Hello from client component");
  const location = useLocation();

  return <>Hello person from {location.location}</>;
};

export default ClientComponent;
