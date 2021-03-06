import "./App.css";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Shared/Footer/Footer";
import Products from "./Pages/Products/Products";
import CheckOut from "./Pages/Products/CheckOut";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import MyOrders from "./Pages/Orders/MyOrders";
import DashBoard from "./Pages/DashBoard/DashBoard";
import AddReview from "./Pages/DashBoard/AddReview";
import MyPortfolio from "./Pages/DashBoard/MyPortfolio";
import AllUsers from "./Pages/DashBoard/AllUsers";
import RequireAdmin from "./Pages/Authentication/RequireAdmin";
import NotFound from "./Pages/Shared/NotFound";
import AddProduct from "./Pages/DashBoard/AddProduct";
import ManageProduct from "./Pages/DashBoard/ManageProduct";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/checkout/:productId"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyPortfolio />}></Route>
          <Route path="myorders" element={<MyOrders />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
