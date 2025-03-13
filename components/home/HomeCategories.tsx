import HomeCategoryCard from "./HomeCategoryCard";
const categories = ["Ringe", "Halskæder", "Armbånd", "Øreringe", "Ure"];
export default function HomeCategories() {
    return (
        <div className="max-w-[1248px] pb-4">
            <h2 className="pt-5 font-semibold text-3xl pb-2.5">Populære kategorier</h2>
            <div className="grid grid-cols-5 gap-4">
                {categories.map((category) => (
                    <HomeCategoryCard key={category} name={category} />
                ))}
            </div>
        </div>
    );
}