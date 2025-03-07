import { ShoppingBag } from "lucide-react";

export default function HeaderCart(){
    return(
        <div className="flex justify-end items-center">
          <ShoppingBag size={32} />
          <span className="ml-2 font-semibold text">Kurv</span>
        </div>
    )
}