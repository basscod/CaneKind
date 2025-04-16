import React from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { Benefits } from "@/components/sections/benefits";
import { CallToAction } from "@/components/sections/cta";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <ProductsShowcase />
      <Benefits />
      <CallToAction />
    </PageLayout>
  );
}
