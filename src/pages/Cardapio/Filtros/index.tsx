import React from "react";
import S from "./Filtros.module.scss";
import filtros from "./filtros.json";
import classNames from "classnames";

type IOpcao = (typeof filtros)[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filtros({ filtro, setFiltro }: Props) {
  const selecionarFiltro = (opcao: IOpcao) => {
    if (filtro == opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  };

  return (
    <div className={S.filtros}>
      {filtros.map((opcao) => (
        <button
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
          className={classNames({
            [S.filtros__filtro]: true,
            [S["filtros__filtro--ativo"]]: filtro === opcao.id,
          })}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
