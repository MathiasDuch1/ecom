import Image from "next/image";

export default function CategoryCard({ name }: { name: string }) {
    return (
        <div className="relative w-[240px] h-[203px] overflow-hidden">
            <Image 
                src={"/frontpage/Ring.jpg"} 
                alt={name} 
                width={240} 
                height={203} 
                className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                {name}
            </span>
        </div>
    );
}