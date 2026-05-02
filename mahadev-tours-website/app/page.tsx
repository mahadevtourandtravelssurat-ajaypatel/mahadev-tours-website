import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import Highlight from "../components/Highlight";
import Notes from "../components/Notes";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Highlight />
      <Packages />
      <Notes />
    </div>
  );
}