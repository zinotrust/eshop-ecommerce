import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import { Home, Contact } from "./pages/index";
// Components
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
