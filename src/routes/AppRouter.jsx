import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import About from "../layout/About";
import Promotion from "../layout/Promotion";
import Smallbouquet from "../layout/Smallbouquet";
import Login from "../layout/Login"
import Register from "../layout/Register";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="promotion" element={<Promotion/>} />
          <Route path="smallbouquet" element={<Smallbouquet/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
