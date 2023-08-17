"use client";
import { SWRConfig } from "swr";
export default function SWRProvider({ children }) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 3000,
        revalidateOnFocus: false,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
