export default function Header() {
    return (
        <header className="py-4">
            <div className="container mx-auto flex  justify-between items-center">
                <h1 className="text-3xl font-bold">Kitchen Gizmo Hub</h1>
                <nav>
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
                <div className="border bg-white border-gray-200 flex">
                    <input
                        type="search"
                        name="input-search"
                        id=""
                        placeholder="Procure o que você deseja comprar"
                        className="w-72 focus:outline-none p-1"
                    />
                    <button className="bg-black w-fit text-slate-100 p-1.5 font-bold border-none text-sm m-1">
                        Procurar
                    </button>
                </div>
            </div>
        </header>
    );
}
