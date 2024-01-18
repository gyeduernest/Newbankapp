import Calltoaction from "./Calltoaction"
import Application from "./Comingsoon"
import Contact from "./Contact"
import Features from "./Features"
import Hero from "./Hero"
import Nav from "./Nav"
import Partners from "./Partners"
import Procedure from "./Procedure"
import Support from "./Support"
import Testimonials from "./Testimonials"

function App() {


  return (
    <>
      <div className="font-sans">
        <Nav/>
        <Hero/>
        <Features/>
        <Procedure/>
        <Calltoaction/>    
        <Support/>
        <Application/>
        <Testimonials/>
        <Contact/>
        <Partners/>
      </div>
    </>
  )
}

export default App
