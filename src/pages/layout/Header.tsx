import { Link as LinkType, links } from "@/constants";
import { Link } from "react-scroll";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full p-5 flex flex-row justify-center items-center gap-5 !text-slate-600 font-body fixed top-0 z-[1000] bg-secondary-500">
      <div className="w-full flex flex-row justify-between items-center gap-10 px-5 xl:px-10">
        <h1 className="text-2xl md:text-4xl font-bold !text-slate-600">
          Arina
        </h1>
        <ul className="hidden md:flex flex-row justify-center items-center gap-5 md:gap-8 lg:gap-15">
          {links.map((val: LinkType, _index: number) => (
            <Link
              className="cursor-pointer font-bold text-lg border-b-2 border-secondary-500  border-solid hover:border-slate-500 transition-all duration-300"
              key={val.id}
              activeClass="active"
              to={val.link}
              spy={true}
              smooth={true}
              offset={0}
              duration={800}>
              {val.text}
            </Link>
          ))}
        </ul>
      </div>
      <Menubar className="flex md:hidden bg-primary focus:!text-white focus:!bg-primary">
        <MenubarMenu>
          <MenubarTrigger className="bg-primary focus:!text-white focus:!bg-primary">
            <Menu />
          </MenubarTrigger>
          <MenubarContent>
            {links.map((val: LinkType, _index: number) => (
              <MenubarItem>
                <Link
                  className="cursor-pointer"
                  key={val.id}
                  activeClass="active"
                  to={val.link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}>
                  {val.text}
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};

export default Header;
