import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import HeaderCart from "@/components/navigation/header/HeaderCart";
import HeaderSearchBar from "@/components/navigation/header/HeaderSearchBar";
import HeaderLogo from "@/components/navigation/header/HeaderLogo";
import AnnouncementBar from "@/components/navigation/announcementbar/AnnouncementBar";
import HeaderMenu from "@/components/navigation/header/HeaderMenu";
import HomeCategories from "@/components/home/HomeCategories";

export default function Home() {
  return (
    <div>
      <AnnouncementBar/>
    <header className="w-full border-b border-gray-300 p-4">
      <div className="grid grid-cols-[1fr_2fr_1fr] items-center gap-1 max-w-312 mx-auto max-h-25">
        <HeaderLogo/>
        <HeaderSearchBar/>
        <HeaderCart/>
      </div>
      <HeaderMenu/>
    </header>
      <main className="max-w-[1374px] max-h-[3942px] mx-auto pt-4">
        <div className="">
          <div className="w-[1248px] h-[555px]">
            <Link href={"/"} className="text-center">
              <Image 
                src={"/frontpage/Portrait.jpg"} 
                alt={"Portrait"} 
                width={1248} 
                height={555}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
        <HomeCategories/>
      </main>
      <footer></footer>
    </div>
  );
}
