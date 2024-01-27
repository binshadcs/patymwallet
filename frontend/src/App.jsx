import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Dashboard } from "./components/Dashboard";
import { SendMoney } from "./components/SendMoney";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney /> } />
        </Routes>
       </BrowserRouter>
    </>
  )
}



export default App

// https://paymentwallet.onrender.com/api/v1/