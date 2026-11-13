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
    </article>
  );
};

export default ProductCard;
