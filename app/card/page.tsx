import Link from "next/link";
import Image from "next/image";

export default function Card({ title, price, imageUrl, imageAlt }) {
    return (
        <Link href="" className="p-4 w-96 h-2/3">
            <Image
                className="w-80 h-80"
                src={imageUrl}
                width={300}
                height={300}
                alt={imageAlt}
            />

            <div className="flex flex-col justify-start mt-2">
                <h2 className="text-xl  text-stone-700">{title}</h2>
                <p className="text-red-600 ">{price}</p>
            </div>
        </Link>
    );
}
