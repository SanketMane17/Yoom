import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
// import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
        }}
      >
        <body
          className={`${inter.className} bg-dark-2`}
          suppressHydrationWarning={true}
        >
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
