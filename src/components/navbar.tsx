import { useContext } from "react";
import { GlobalContext } from "../context/global";

const sections = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "Features",
    url: "#features",
  },
];

export default function Navbar() {
  const { setCurrentPage } = useContext(GlobalContext);

  return (
    <nav className="absolute top-4 flex justify-center w-full">
      {sections.map(({ name, url }) => (
        <a onClick={() => setCurrentPage({ name: url })} key={name} href={url}>
          {name}
        </a>
      ))}
    </nav>
  );
}
