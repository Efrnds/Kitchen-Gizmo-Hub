import Link from "next/link";
import Image from "next/image";

interface CardProps {
    title: string;
    price: string; // Se o preço for um número, altere para number
    imageUrl: string;
    imageAlt: string;
}

const Card: React.FC<CardProps> = ({ title, price, imageUrl, imageAlt }) => {
    return (
        <Link href="" passHref>
            <a className="p-4 w-96 h-fit items-center flex flex-col rounded-sm shadow-sm bg-white">
                <Image
                    className="w-80 rounded-sm h-80"
                    src={imageUrl}
                    width={100}
                    height={100}
                    alt={imageAlt}
                />
                <div className="flex flex-col self-start px-4 mt-2">
                    <h2 className="text-xl text-stone-700">{title}</h2>
                    <p className="text-red-600">{price}</p>
                </div>
            </a>
        </Link>
    );
}

export default Card;
