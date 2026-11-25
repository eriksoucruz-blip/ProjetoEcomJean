import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const userButtons = () => {
  return (
    <div>
      <button
        className="px-2 text-white relative"
      >
        <FontAwesomeIcon icon={faBagShopping} />
        <div
          id="cart-amount"
          className="absolute -top-2 -right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
        >
          3
        </div>
      </button>
      <a className="px-2 text-white">
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
};

export default userButtons;
