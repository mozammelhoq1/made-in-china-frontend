import "./App.css";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Shared/Footer/Footer";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Authentication/Login";
import CheckOut from "./Pages/Products/CheckOut";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="checkout/:productId" element={<CheckOut />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
