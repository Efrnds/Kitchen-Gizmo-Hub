import style from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
    return (
        <header className="py-4">
            <div className="container mx-auto flex  justify-between items-center">
                <h1 className="text-3xl font-bold">Kitchen Gizmo Hub</h1>
                <nav className={style.navbar}>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#"
                                className=" text-xl hover:text-gray-600"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className=" text-xl hover:text-gray-600"
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className=" text-xl hover:text-gray-600"
                            >
                                Cart
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className=" text-xl hover:text-gray-600"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div
                    className={`border bg-white border-gray-200 transition hover:border-black flex ${style.searchbar}`}
                >
                    <input
                        type="search"
                        name="input-search"
                        id=""
                        placeholder="Procure o que você deseja comprar"
                        className="w-72 focus:outline-none p-1"
                    />
                    <button className="bg-black w-fit text-slate-100 p-1.5 font-bold text-sm m-1 border border-black transition hover:border-red-600 hover:text-red-600">
                        Procurar
                    </button>
                </div>
                <div className={`flex gap-2 ${style.hambmenu}`}>
                    <FaShoppingCart className="text-3xl" />
                    <FaSearch className="text-3xl" />
                    <AiOutlineMenu className="text-3xl" />
                </div>
            </div>
        </header>
    );
}
