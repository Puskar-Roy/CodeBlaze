import Navbar from "../components/Navbar";
import "../assets/index.css";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

export default function page() {
  return (
    <main>
      <div className="menu">
        <Navbar />
      </div>
    </main>
  );
}
