const ProductFilters = () => {
  return (
    <section className="flex justify-center items-center py-4 gap-0.5">
      <input
        id="filter-1"
        type="radio"
        name="filter-Selection"
        className="hidden"
      />
      <label
        htmfor="filter-1"
        className="rounded-s-lg bg-slate-950 p-2 hover:bg-slate-800 cursor-pointer text-white p-2 text-sm"
      >
        Todos
      </label>
      <input
        id="filter-2"
        type="radio"
        name="filter-Selection"
        className="hidden"
      />
      <label
        htmfor="filter-2"
        className=" bg-slate-950 p-2 hover:bg-slate-800 cursor-pointer text-white p-2 text-sm"
      >
        Masculino
      </label>
      <input
        id="filter-3"
        type="radio"
        name="filter-Selection"
        className="hidden"
      />
      <label
        htmfor="filter-3"
        dir="rtl"
        className="rounded-s-lg bg-slate-950 p-2 hover:bg-slate-800 cursor-pointer text-white p-2 text-sm"
      >
        Feminino
      </label>
    </section>
  );
};

export default ProductFilters;
