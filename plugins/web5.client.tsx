"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


interface Web5ContextProps {
  web5: any;
  myDID: string | null;
}

const Web5Context = createContext<Web5ContextProps>({
  web5: null,
  myDID: null,
});

export const useWeb5 = () => {
  return useContext(Web5Context);
};

export const Web5Provider = ({ children }: { children: ReactNode }) => {
  const [web5, setWeb5] = useState<any>(null);
  const [myDID, setMyDID] = useState<string | null>(null);

  useEffect(() => {
    const connectWeb5 = async () => {
      const { Web5 } = await import("@web5/api");
      try {
        const { web5: connectedWeb5, did: connectedDID } = await Web5.connect({
          sync: "5s",
        });
        setWeb5(connectedWeb5);
        setMyDID(connectedDID);
      } catch (error) {
        console.error("Error connecting to Web5:", error);
      }
    };

    connectWeb5();
  }, []);

  return (
    <Web5Context.Provider value={{ web5, myDID }}>
      {children}
    </Web5Context.Provider>
  );
};
