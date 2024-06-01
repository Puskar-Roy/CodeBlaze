import Image from "next/image";
import logo from "../assets/3.png";
import { Montserrat, Poppins, Yellowtail } from "next/font/google";
import "../assets/index.css";

const monse = Montserrat({
  weight: "300",
  subsets: ["cyrillic"],
  display: "swap",
});
const alata = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const ubuntu = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto py-8">
      <div className="flex gap-2 justify-center items-center ">
        <Image
          src={logo}
          alt="logo"
          className="h-[65px] w-auto rounded-full shadow-lg"
        />
        <h1 className={`${ubuntu.className} text-orange-400 text-3xl`}>
          Code
          <span className={` text-orange-600`}>blaze</span>{" "}
          <span
            className={`${alata.className} text-blue-400 text-2xl font-semibold`}
          >
            Studios
          </span>
        </h1>
      </div>

      <ul
        className={`${monse.className} flex gap-8 text-white justify-center items-center list-none text-base`}
      >
        <li className="text-white hover:bg-orange-400 hover:text-white rounded-xl py-1.5 px-3">
          Home
        </li>
        <li className="text-white hover:bg-orange-400 hover:text-white rounded-xl py-1.5 px-3">
          About
        </li>
        <li className="text-white hover:bg-orange-400 hover:text-white rounded-xl py-1.5 px-3">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
