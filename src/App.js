import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JingleBugs from "./pages/JingleBugs";
import Glowbugs from "./pages/Glowbugs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glowbugs" element={<Glowbugs />} />
          <Route path="/jinglebugs" element={<JingleBugs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
