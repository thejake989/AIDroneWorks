import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Showcase from "./Components/Showcase/Showcase";
import Faq from "./Components/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <Showcase />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
