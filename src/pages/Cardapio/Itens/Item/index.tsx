import S from "./Item.module.scss";
import cardapio from "../Itens.json";
import classNames from "classnames";

type Props = (typeof cardapio)[0];

function Item(props: Props) {
  const { photo, title, description, category, size, serving, price } = props;
  return (
    <div className={S.item}>
      <div className={S.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={S.item__descricao}>
        <div className={S.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={S.item__tags}>
          <div
            className={classNames({
              [S.item__tipo]: true,
              [S[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={S.item__porcao}>{size}g</div>
          <div className={S.item__qtdpessoas}>
            serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={S.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
