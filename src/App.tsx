import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Topnav from "./Pages/Topnav"
import Sidemenu from "./Pages/Sidemenu"
import Homescreen from "./Pages/Homescreen"
import Login from "./Pages/Login"
import Transaction from "./Pages/Transaction"
import Trustfund from "./Pages/Trustfund"
import Getadvice from "./Pages/Getadvice"
import Account from "./Pages/Account"
import Signup from "./Pages/Sgnup"

function App() {
  
  return (
        <>
              <>
                  <BrowserRouter>
                  <div>
                      <Topnav/>
                    </div>
                    <div className="lg:flex  lg:gap-8 lg:px-40">
                      <div className="">
                        <Sidemenu/>
                      </div>
                      <div>
                        <Routes>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/signup" element={<Signup/>}/>
                          <Route path="/homescreen" element={<Homescreen/>}/>
                          <Route path="/transaction" element={<Transaction/>}/>
                          <Route path="/trustfund" element={<Trustfund/>}/>
                          <Route path="/getadvice" element={<Getadvice/>}/>
                          <Route path="/account" element={<Account/>}/>
                        </Routes>
                      </div>
                    </div>        
                  </BrowserRouter>
              </>

        </>

    )
}

export default App
