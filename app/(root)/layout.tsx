"use client";

import { Toaster } from "react-hot-toast";
import ScrollHeaderWrapper from "@/components/ScrollHeaderWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLayoutEffect, useRef, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    if (headerRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        setHeaderHeight(headerRef.current!.offsetHeight);
      });

      resizeObserver.observe(headerRef.current);
      setHeaderHeight(headerRef.current.offsetHeight);

      return () => resizeObserver.disconnect();
    }
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <ScrollHeaderWrapper>
        <div ref={headerRef}>
          <Header />
        </div>
      </ScrollHeaderWrapper>

      <main style={{ paddingTop: headerHeight }} className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
