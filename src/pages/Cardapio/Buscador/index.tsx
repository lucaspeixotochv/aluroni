import React from "react";
import S from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={S.buscador}>
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="4C4D5E" />
    </div>
  );
}

export default Buscador;
