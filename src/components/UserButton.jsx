
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const userButtons = () => {

    return (
            <div>

                <button className="px-2 text-white">
                    <FontAwesomeIcon icon={faBagShopping} />
                </button>
                <a className="px-2 text-white">
                    <FontAwesomeIcon icon={faUser} />
                </a>

            </div>
            )        

};

export default userButtons;