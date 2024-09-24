import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import Quotes from "./components/Quotes";
import LongCards from "./components/LongCards";
import SmallCards from "./components/SmallCards";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full h-auto">
      <Header />
      <Hero />
      <ImageSection />
      <Quotes />
      <LongCards />
      <SmallCards />
      <Footer />
    </div>
  );
}

export default App;
