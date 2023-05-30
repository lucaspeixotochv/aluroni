import S from "./Ordenador.module.scss";
import opcoes from "./Opcoes.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;

  return (
    <button
      className={classNames({
        [S.ordenador]: true,
        [S["ordenador--ativo"]]: ordenador != "",
      })}
      onClick={() => {
        setAberto(!aberto);
      }}
      onBlur={() => setAberto(false)}
    >
      <span>Ordenar Por: {nomeOrdenador}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [S.ordenador__options]: true,
          [S["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div
            className={S.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default Ordenador;
