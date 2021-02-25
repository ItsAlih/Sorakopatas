const onClickButton = () => {
  window.location.replace("https://twitter.com/SorakaAgressiva");
};

function Home() {
  return (
    <div id="toor">
      <div className="team">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">Sorakopatas</a>
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
            Sorakopatas
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
            Caso esteja interessado, entre no nosso servidor, temos uma <br />
            área focada para desenvolvedores, jogos, Genshin Impact e diversos
            assuntos. <br />
            Não somos apenas amigos, somos uma família! <br />
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn btn-success" onClick={onClickButton}>
              Conheça nossa criadora!
            </button>
          </div>
        </div>
        <br />
        <footer style={{ marginTop: "10rem" }}>
          Created by:{" "}
          <a href="https://twitter.com/NenemDaMya" style={{ color: "yellow" }}>
            Alice
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Home;
