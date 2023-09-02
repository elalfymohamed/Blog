import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MantineProvider } from "@mantine/core";

import { HeaderMenu, Footer } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <HeaderMenu />
        {children}
        <Footer />
      </MantineProvider>
    </QueryClientProvider>
  );
}
