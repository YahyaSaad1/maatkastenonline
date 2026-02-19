import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import OurClosets from "./components/ourClosets/OurClosets";
import Closet from "./components/ourClosets/Closet";
import CustomerService from "./components/CustomerService/CustomerService";
import Quality from "./components/Quality";
import Tips from "./components/Tips";
import Promotions from "./components/Promotions";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-closets" element={<OurClosets/>} />
        <Route path="/our-closets/closet/:id" element={<Closet/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/customer-service" element={<CustomerService/>} />
        <Route path="/quality" element={<Quality/>} />
        <Route path="/tips" element={<Tips/>} />
        <Route path="/promotions" element={<Promotions/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
