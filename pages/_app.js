import Head from "next/head";
import icon from "../img/favicon.jpg";
import Navigation from "../components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Sorakopatas</title>
        <link rel="shortcut icon" href={icon} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}
