import Head from "next/head";
import { AppLayout } from "@/layouts";
import { AppDetail, AppPortfolio, AppSideMenu } from "@/components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BSSM SH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout
        app={<AppPortfolio />}
        sidebar={<AppSideMenu />}
        detail={<AppDetail />}
      />
    </div>
  );
}
