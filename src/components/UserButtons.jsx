
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const UserButtons = () => {

    return (
            <div>

                <button>
                    <FontAwesomeIcon icon={faBagShopping} />
                    carrinho
                </button>
                <a>
                    <FontAwesomeIcon icon={faUser} />
                </a>

            </div>
            )        

};

export default UserButtons;