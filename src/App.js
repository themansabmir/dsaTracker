import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateDSA } from "./pages/DSA/CreateDSA";
import { ViewDSA } from "./pages/DSA/ViewDSA";
import ViewSingle from "./pages/DSA/ViewSingle";
import { useSelector } from "react-redux";
import { userToken } from "./features/userSlice";
function App() {
  const token = useSelector(userToken);

  return (
    <BrowserRouter>
      <Routes>
        {
          <>
            <Route path='/' element={token? <ViewDSA /> : <Login />} />
            <Route path='/addnew' element={token && <CreateDSA /> } />
            <Route path='/viewall' element={ token &&<ViewDSA />} />
            <Route path='/viewall/:id' element={token && <ViewSingle />} />

            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/' element={<Login />} />
          </>
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
