import { useState } from "react";

const CartOverlay = () => {
  const [isCartOpen, setIsCartOpen] = useState(true);

  return (
    <div
      className={`h-screen w-full fixed top-0 left-0 flex z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <section
        id="outside"
        onClick={() => setIsCartOpen(false)}
        className="w-3/4  text-white p-4 opacity-15 bg-slate-950"
      ></section>
      <section
        id="cart"
        className="w-1/4 bg-slate-950 text-white p-4 min-w-96 border-l-2 border-slate-400 flex flex-col justify-between"
      ></section>
    </div>
  );
};

export default CartOverlay;
