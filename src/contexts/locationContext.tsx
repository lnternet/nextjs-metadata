import React, { createContext, useContext, useEffect, useState } from "react";

type APIResponse = {
  city: string;
  country_name: string;
};

type LocationContextType = {
  location: string;
};

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

type LocationContextProviderProps = {
  children: React.ReactNode;
};

export const LocationContextProvider: React.FC<LocationContextProviderProps> = (
  props
) => {
  const [location, setLocation] = useState<string>("...?");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://ipapi.co/json");
      const data = (await response.json()) as APIResponse;
      setLocation(data.city + ", " + data.country_name);
    };

    fetchData();
  }, []);

  return (
    <LocationContext.Provider value={{ location }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error("useLocation was used outside of its provider.");
  }

  return context;
};
