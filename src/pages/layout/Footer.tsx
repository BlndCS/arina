import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full p-5 flex flex-row justify-center items-center gap-5 text-slate-200 bg-secondary-500 font-body">
      <Copyright />
      {new Date().getFullYear()} Arina All right recieved
    </footer>
  );
};

export default Footer;
