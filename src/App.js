import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateDSA } from "./pages/DSA/CreateDSA";
import { ViewDSA } from "./pages/DSA/ViewDSA";
import ViewSingle from "./pages/DSA/ViewSingle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/addnew' element={<CreateDSA />} />
        <Route path='/viewall' element={<ViewDSA />} />
        <Route path='/viewall/:id' element={<ViewSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
