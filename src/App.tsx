import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homescreen from "./Pages/Homescreen"
import Login from "./Pages/Login"
import Transaction from "./Pages/Transaction"
import Trustfund from "./Pages/Trustfund"
import Signup from "./Pages/Sgnup"
import Pending from "./Pages/Pending"
import Account from "./Pages/Account"
import Landingpage from "./Pages/Landingpage"

function App() {


  
  return (
        <>
              <>
                  <BrowserRouter>
                     <div className="font-sans">
                        <Routes>
                          <Route path="/" element={<Landingpage/>}/>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/signup" element={<Signup/>}/>
                          <Route path="/homescreen" element={<Homescreen/>}/>
                          <Route path="/transaction" element={<Transaction/>}/>
                          <Route path="/trustfund" element={<Trustfund/>}/>
                          <Route path="/pending" element={<Pending/>}/>
                          <Route path="/account" element={<Account/>}/>
                         
                        </Routes>
                      </div>
                     
                  </BrowserRouter>
              </>

        </>

    )
}

export default App
