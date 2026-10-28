"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { PolishedToaster } from "./ui/halo-toast";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <PolishedToaster />
          {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </ThemeProvider>
  );
};
