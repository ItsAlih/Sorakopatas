import React from "react";

function Who() {
  return (
    <div className="col-md-8 offset-md-2 info" style={{ marginTop: "36px" }}>
      <h1 className="text-center" style={{ fontSize: "3rem" }}>
        Sobre os <strong style={{ color: "yellow" }}>Sorakopatas</strong>!
      </h1>

      <br />

      <p className="text-center txt-opc" style={{ fontSize: "20px" }}>
        Somos apenas um servidor de amigos feito para amigos.
        <br />
        Nós conversamos sobre jogos, algumas coisas da vida, como escola
        <br />
        vida familiar, online, porém não conversamos sobre assuntos mais
        <br />
        pessoais para não trazer um clima tenso ao servidor.
        <br />
      </p>

      <p className="text-center txt-opc" style={{ fontSize: "20px" }}>
        Temos moderadores no servidor que interagem quase sempre
        <br />
        com os membros, temos streamers e 600 membros no nosso
        <br />
        servidor! Além disso, temos uma área de lazer para certos
        <br />
        jogo que vocês gostam!
      </p>

      <p className="text-center txt-opc" style={{ fontSize: "20px" }}>
        Caso queira saber mais sobre o servidor, acesse o link abaixo
        <br />
        e descubra o quão fácil é engajar com diversas pessoas aqui! <br />
        Antes de começar a conversar de fato, sugiro que leiam as regras! <br />
        As regras ficam{" "}
        <a href="/rules" style={{ color: "yellow" }}>
          aqui nessa página
        </a>
        . <br />
        <a
          /*href="https://discord.gg/RVFpfx6"*/
          style={{ color: "lightblue", textDecoration: "underline" }}
        >
          Entre no{" "}
          <strong
            style={{
              color: "yellow",
            }}
          >
            Sorakopatas
          </strong>
          !
        </a>
      </p>
    </div>
  );
}

export default Who;
