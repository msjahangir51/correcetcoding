import { BrowserRouter, Route, Routes } from "react-router-dom"
import Model from "./Pages/Model";
import About from './Pages/About';
import Skills from './Pages/Skills';
import Protfolio from './Pages/Protfolio';
import Contact from './Pages/Contact';
import Service from "./Pages/Service";
import SMS_send from "./Component/SMS_send";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Model/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/protfolio" element={<Protfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/contact/Submited" element={<SMS_send/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
