import Head from "next/head";
import icon from "../img/favicon.jpg";

const creatorLinkButton = () => {
  window.location.replace("https://twitter.com/SorakaAgressiva");
};

const discordInviteButton = () => {
  window.location.replace("https://discord.gg/RVFpfx6");
};

function Home() {
  return (
    <div id="toor">
      <Head>
        <link rel="shortcut icon" href={icon} />
      </Head>
      <div className="team">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">
            We are <strong style={{ color: "yellow" }}>Sorakopatas.</strong>
          </a>
          <div className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Isso nn funciona"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0">
              Search
            </button>
          </div>
        </nav>
        <div
          className="col-md-8 offset-md-2 info"
          style={{ marginTop: "36px" }}
        >
          <h1 className="text-center" style={{ fontSize: "3rem" }}>
            We are <strong style={{ color: "yellow" }}>Sorakopatas!</strong>
          </h1>
          <br />
          <p className="text-center" style={{ fontSize: "20px" }}>
            Esta é a página principal! <br />
            Este site é apenas um teste para um futuro site completo do servidor{" "}
            <a href="https://discord.gg/RVFpfx6" style={{ color: "yellow" }}>
              Sorakopatas
            </a>
            . <br />
          </p>
          <p className="text-center txt-opc" style={{ fontSize: "20px" }}>
            Caso esteja interessado, entre no nosso servidor, temos uma área{" "}
            focada
            <br /> para desenvolvedores, jogos, Genshin Impact, Minecraft e
            diversos assuntos. <br />
            Não somos apenas amigos, somos uma família! <br />
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn btn-success" onClick={creatorLinkButton}>
              Conheça nossa criadora!
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <button className="btn btn-success" onClick={discordInviteButton}>
              Entre em nosso servidor!
            </button>
          </div>
        </div>
        <br />
        <footer style={{ marginTop: "6rem" }}>
          Created by:{" "}
          <a href="https://twitter.com/NenemDaMya" style={{ color: "yellow" }}>
            Alice
          </a>{" "}
          <br />
          <p style={{ marginTop: "8px", fontSize: "16px" }}>
            Proibido <strong style={{ color: "red" }}>Jannistas.</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
