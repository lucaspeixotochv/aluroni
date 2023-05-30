import React from "react";
import S from "./Itens.module.scss";
import cardapio from "./Itens.json";
import Item from "./Item";

interface Props {
  busca: string;
  filtro: null | number;
  ordenador: string;
}

function Itens(props: Props) {
  const [lista, setLista] = React.useState(cardapio);
  const { busca, filtro, ordenador } = props;

  const testaBusca = (title: string) => {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  };

  const testaFiltro = (id: number) => {
    if (filtro != null) return filtro === id;
    return true;
  };

  const ordenar = (novaLista: typeof cardapio) => {
    switch (ordenador) {
      case "maior_porcao":
        return novaLista.sort((a, b) => (a.size < b.size ? 1 : -1));
      case "menor_porcao":
        return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return novaLista.sort((a, b) => (a.serving < b.serving ? 1 : -1));
      case "maior_preco":
        return novaLista.sort((a, b) => (a.price < b.price ? 1 : -1));
      case "menor_preco":
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return novaLista;
    }
  };

  React.useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={S.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Itens;
