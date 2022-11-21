import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JingleBugs from "./pages/JingleBugs";
import Glowbugs from "./pages/Glowbugs";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Glowbugs />
        <JingleBugs />
      </main>

      <Footer />
    </div>
  );
}

export default App;
