import "./App.css";
import NavigationBar from "./Pages/Shared/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Shared/Footer/Footer";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
