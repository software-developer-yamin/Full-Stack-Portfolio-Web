import { Navbar } from "../components";
import { About, Footer, Header, Skills, Testimonial, Work } from "../container";
import Head from "next/head";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="👋" className="yamin-logo" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
