import Image from "next/image";
import Link from "next/link";
import Card from "../card";
import style from "./style.module.css";

const Home = () => {
    return (
        <div className="p-4 mx-20">
            <section className={`flex ${style.section}`}>
                <Image
                    className="lg:w-1/2"
                    src="/img/banner.jpg"
                    width={1920}
                    height={1080}
                    alt="Banner da loja"
                />
                <div className="lg:w-1/2 bg-white pl-5 flex flex-col">
                    <div className="my-auto flex flex-col gap-3 ">
                        <h3 className="font-bold text-xl  text-red-600 font-mono">
                            POR TEMPO LIMITADO
                        </h3>
                        <p className="text-stone-600">
                            Por tempo limitado veja essa categoria de
                            produtos na promoção
                        </p>
                        <Link
                            href="#"
                            className="bg-black md:w-fit text-slate-100 p-1.5 font-bold border border-black transition hover:border-red-600 hover:text-red-600"
                        >
                            COMPRAR AGORA
                        </Link>
                    </div>
                </div>
            </section>
            <div className="flex justify-between mt-8">
                <div>
                    <h2 className="text-2xl font-bold">Produtos em destaque</h2>
                </div>
                <Link
                    href="#"
                    className="bg-black border border-black transition hover:border-red-600 hover:text-red-600 w-fit text-slate-100 p-1.5 font-bold "
                >
                    VER TODOS
                </Link>
            </div>
            <hr className="mb-8 mt-1 border-slate-200" />
            <div className="flex justify-center gap-5 flex-wrap">
                <Card
                    title="Frigideira antiaderente"
                    price="R$ 342,60"
                    imageUrl="/img/frigideira.jpg"
                    imageAlt="Frigideira de cerâmica"
                />
                <Card
                    title="Kit 12 utensílios de silicone"
                    price="R$ 213,00"
                    imageUrl="/img/kit 12 untesilios.jpg"
                    imageAlt="Kit com 12 utensílios de silicone"
                />
                <Card
                    title="Potes de condimentos"
                    price="R$ 149,99"
                    imageUrl="/img/potes.jpg"
                    imageAlt="Potes de condimentos para utilização na cozinha"
                />
                <Card
                    title="Frigideira antiaderente"
                    price="R$ 342,60"
                    imageUrl="/img/frigideira.jpg"
                    imageAlt="Frigideira de cerâmica"
                />
            </div>
        </div>
    );
};
export default Home;
