import Head from "next/head";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import BankCardControl from "@/components/BankCardControl";
import FgtsRegistration from "../components/fgtsRegistration";

export default function Home() {
  return (
    <div>
      <Head>
        <title>portifolio</title>
        <meta
          name="description"
          content="portifolio"
        />
        <meta name="theme-color" />
        <link rel="icon" href="/simbolou.jpeg" />
      </Head>
      <Hero />
      <Servicos />
      <BankCardControl />
      <FgtsRegistration />
    </div>
  );
}
