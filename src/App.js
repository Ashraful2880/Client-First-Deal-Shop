import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AboutUs from "./Components/AboutUs/AboutUs/AboutUs";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header/Header";
import Shop from "./Components/Shop/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import AddToCart from "./Components/CartOverview/AddToCart/AddToCart";
import AuthProvider from "./Context/AuthProvider";
import Checkout from "./Components/CartOverview/Checkout/Checkout";
import PlaceOrder from "./Components/CartOverview/PlaceOrder/PlaceOrder";
import Success from "./Components/PaymentInfo/Success/Success";
import ScrollToTop from "react-scroll-to-top";
import TrackOrder from "./Components/PaymentInfo/TrackOrder/TrackOrder";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#fff" />
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="addToCart/:productId" element={<AddToCart />} />
            <Route path="placeOrder" element={<PlaceOrder />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="/success/:id" element={<Success />} />
            <Route path="trackOrder" element={<TrackOrder />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
