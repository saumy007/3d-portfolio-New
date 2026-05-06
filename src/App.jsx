import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Certifications,
  StarsCanvas,
  ArticlesAndPosts,
  Hobbies,
  Achievements,
} from "./components";

/* ── Main one-page portfolio ──────────────────────────────────────── */
const MainPage = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Certifications />
    <Achievements />
    <ArticlesAndPosts />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

/* ── Hobbies standalone page ─────────────────────────────────────── */
const HobbiesPage = () => (
  <div className="relative z-0 bg-primary">
    <Navbar />
    <Hobbies />
  </div>
);

/* ── App root ────────────────────────────────────────────────────── */
const App = () => (
  <Routes>
    <Route path="/"        element={<MainPage />}   />
    <Route path="/hobbies" element={<HobbiesPage />} />
  </Routes>
);

export default App;
