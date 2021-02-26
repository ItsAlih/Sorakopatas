import Head from "next/head";

import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";

import icon from "../img/favicon.jpg";

function Home() {
  return (
    <div id="toor">
      <Head>
        <link rel="shortcut icon" href={icon} />
      </Head>
      <div className="team">
        <Navbar />
        <HomeContent />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
