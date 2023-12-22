"use client";

import { LocationContextProvider } from "@/contexts/locationContext";
import React from "react";

type ClientContextProvidersProps = {
  children: React.ReactNode;
};

const ClientContextProviders: React.FC<ClientContextProvidersProps> = (
  props
) => {
  return <LocationContextProvider>{props.children}</LocationContextProvider>;
};

export default ClientContextProviders;
