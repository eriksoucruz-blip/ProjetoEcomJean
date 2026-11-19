import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ id, name, brand, image, femine, price }) => {
  return (
    <article className="card-produto group w-48 bg-stone-100 rounded-lg shadow-md p-4 m-2 flex flex-col items-center justify-around border-2 border-gray-300">
      <img
        src={image}
        className="group-hover:scale-110 rounded-lg mx-4 t-cover mb-4 my-3 transition duration-300"
        alt={`Imagem do produto ${id}`}
      />
      <h3>{name}</h3>
      <p>{brand}</p>
      <p>{femine}</p>
      <p>R$ {price.toFixed(2)}</p>
      <button className="bg-slate-900 hover:bg-slate-050 hover:scale-105 rounded-md mx-4 my-1 text-slate-100 transition duration-300 flex items-center justify-center gap-2 p-2 block w-full">
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </article>
  );
};

export default ProductCard;
