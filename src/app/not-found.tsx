'use client'

import type { Metadata } from "next";
import "./globals.css";
import portfolioStyles from "./Portfolio.module.scss"
import Link from "next/link";
import Heading from "./components/Heading/Heading";
import Button from "./components/Button/Button";

export const metadata: Metadata = {
  title: "404: Not Found - Jezz Lucena",
};

export default function GlobalError() {
  return (
    <div className={`${portfolioStyles.content} relative bg-white`}>
      <div className={`${portfolioStyles.anchor} absolute -top-[60px]`} id="content"></div>
      <div className="w-[100%] mx-auto py-[30px] px-[10px] md:px-[30px] lg:px-[50px] text-center">
        <Heading>
          <span>Error 404: Page Not Found</span>
        </Heading>
        <Link href="/">
          <Button>Try again</Button>
        </Link>
      </div>
    </div>
  );
}
