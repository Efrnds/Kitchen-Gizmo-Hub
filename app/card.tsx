import Link from "next/link";
import Image from "next/image";


function Card({ title = "", price = "", imageUrl = "", imageAlt = ""}) {
    return (
            <Link href="" passHref className="border border-transparent transition hover:border-stone-600 p-4 w-96 h-fit items-center flex flex-col rounded-sm shadow-sm bg-white">
                <Image
                    className="w-80 rounded-sm h-80"
                    src={imageUrl}
                    width={1000}
                    height={1000}
                    alt={imageAlt}
                />
                <div className="flex flex-col self-start px-4 mt-2">
                    <h2 className="text-xl text-stone-700 transition hover:text-stone-950">{title}</h2>
                    <p className="text-red-600 transition hover:text-red-800">{price}</p>
                </div>
            </Link>
    );
}

export default Card;
