import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Treatment } from "./components/treatment/treatment";
import { OurDoctor } from "./components/OurDoctor/OurDoctor";
import { Contact } from "./components/contact/Contact";
import { SignIn } from "./components/doctor-signin-signup/SignIn";
import { SignUp } from "./components/doctor-signin-signup/SignUp";
import { DashBoard } from "./components/dashboard/DashBoard";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { ReceptionList } from "./components/dashboard/ReceptionList";

function App() {
  return (<div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path = "/about" element={<About/>}/>
    <Route path="/treatment" element={<Treatment/>}/>
    <Route path="/doctor" element={<OurDoctor/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/dashboard" element={<ProtectedRoute><DashBoard/></ProtectedRoute>}/>
    <Route path="/reception-list" element={<ProtectedRoute><ReceptionList/></ProtectedRoute>}/>
  </Routes>
  </BrowserRouter>
  </div>)
}

export default App;
