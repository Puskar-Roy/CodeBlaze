import Image from "next/image";
import heroImage from "../assets/output_image.png";
import logo from "../assets/3.png";
import { Montserrat, Ubuntu } from "next/font/google";
import '../assets/index.css'

const alata = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});
const ubuntu = Ubuntu({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function page() {
  return (
    <main>
      <div className="menu">
        {/* <Image
          className="w-screen h-screen absolute top-0 left-0 -z-[100]"
          src={heroImage}
          alt="hero"
        /> */}
        <div>
          <div>
            <Image
              src={logo}
              alt="logo"
              className="h-[80px] w-auto rounded-full"
            />
            <h1 className={`${ubuntu.className}`}>Hello</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
