import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JingleBugs from "./pages/JingleBugs";
import Glowbugs from "./pages/Glowbugs";
import WellbeingMusicClub from "./pages/WellbeingMusicClub";
import Choirs from "./pages/Choirs";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glowbugparties" element={<Glowbugs />} />
          <Route path="/parties" element={<Glowbugs />} />
          <Route path="/jinglebugs" element={<JingleBugs />} />
          <Route path="/juniors" element={<JingleBugs />} />
          <Route path="/jinglebugs" element={<JingleBugs />} />
          <Route path="/wellbeingmusicclub" element={<WellbeingMusicClub />} />
          <Route path="/choirs" element={<Choirs />} />
          <Route path="/unison-choir" element={<Choirs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
