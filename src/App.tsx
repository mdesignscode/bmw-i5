import AboutUs from "./components/about";
import Features from "./components/features";
import Home from "./components/home";
import Navbar from "./components/navbar";
import PageIndicators from "./components/pageIndicators";
import SocialLinks from "./components/socialLinks";
import useScrollDirection from "./hooks/scrollDirection";
import "./styles/main.css";

function App() {
  useScrollDirection();
  return (
    <div
      className="h-[100dvh] w-screen bg-neutral-500 overflow-y-hidden text-white"
      id="container"
    >
      {/* shared layout */}
      <Navbar />
      <PageIndicators />
      <SocialLinks />

      {/* sections (pages) */}
      <Home />
      <Features />
      <AboutUs />
    </div>
  );
}

export default App;
