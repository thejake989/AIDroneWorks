import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Showcase from "./Components/Showcase/Showcase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
