import Features from "./components/features";
import Home from "./components/home";
import Navbar from "./components/navbar";
import PageIndicators from "./components/pageIndicators";
import SocialLinks from "./components/socialLinks";
import { GlobalProvider } from "./context/global";
import "./styles/main.css";

function App() {
  return (
    <GlobalProvider>
      <div className="h-[100dvh] w-screen bg-neutral-500 text-white overflow-hidden">
        <Navbar />
        <PageIndicators />
        <SocialLinks />
        <Home />
        <Features />
      </div>
    </GlobalProvider>
  );
}

export default App;
