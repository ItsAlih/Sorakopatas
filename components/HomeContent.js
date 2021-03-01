import React from "react";
// import "bootstrap/dist/css/bootstrap.css";

const creatorLinkButton = () => {
  window.open("https://twitter.com/SorakaAgressiva", "_blank");
};

const discordInviteButton = () => {
  window.open("https://discord.gg/RVFpfx6", "_blank");
};

function HomeContent() {
  return (
    <div className="col-md-8 offset-md-2 info" style={{ marginTop: "36px" }}>
      <h1 className="text-center" style={{ fontSize: "3rem" }}>
        We are <strong style={{ color: "yellow" }}>Sorakopatas</strong>!
      </h1>

      <br />

      <p className="text-center" style={{ fontSize: "20px" }}>
        Você está na página principal! <br />
        Este site é apenas um teste para um futuro site completo do servidor{" "}
        <a /*href="https://discord.gg/RVFpfx6"*/ style={{ color: "yellow" }}>
          <strong style={{ color: "yellow" }}>Sorakopatas</strong>
        </a>
        <br />
      </p>
      <p className="text-center txt-opc" style={{ fontSize: "20px" }}>
        Sejam todos muito bem-vindos ao site do servidor{" "}
        <strong style={{ color: "yellow" }}>Sorakopatas</strong>!<br />
        Eu me chamo Alice, sou a desenvolvedora front-end daqui
        <br />
        e por aqui apresento a vocês o nosso querido servidor
        <br />
        através deste nosso futuro website. Para mais informações
        <br />
        acesse a página{" "}
        <strong>
          <a style={{ color: "yellow" }} href="/about">
            sobre
          </a>
          .
        </strong>
      </p>

      <p className="text-center txt-opc" style={{ fontSize: "20px" }}>
        Caso esteja interessado, entre no nosso servidor, temos uma área focada
        <br /> para desenvolvedores, jogos, Genshin Impact, Minecraft e diversos
        assuntos. <br />
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
        <button className="btn btn-success" /*onClick={discordInviteButton}*/>
          Entre em nosso servidor!
        </button>
      </div>
    </div>
  );
}

export default HomeContent;
