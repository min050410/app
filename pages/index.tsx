import Head from "next/head";
import { MainLayout } from "@/layouts";
import { PortfolioList } from "@/components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BSSM SH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout app={<PortfolioList />} />
    </div>
  );
}
