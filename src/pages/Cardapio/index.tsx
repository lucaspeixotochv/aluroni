import { useState } from "react";
import Buscador from "./Buscador";
import S from "./Cardapio.module.scss";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from "./Itens";

function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <nav className={S.menu}>
        <img src="/assets/logo.svg" alt="Logo Aluroni" />
      </nav>
      <header className={S.header}>
        <div className={S.header__text}>A casa da massa</div>
      </header>
      <section className={S.cardapio}>
        <h3 className={S.cardapio__title}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={S.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}

export default Cardapio;
