import { Search } from "lucide-react";

export default function HeaderSearchBar(){
    return(
        <div className="relative">
          <input
            type="text"
            placeholder="Søg i mere end 7000 produkter"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2" size={18} />
        </div>
    )
}