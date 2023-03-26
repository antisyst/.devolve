import Navigation from './components/navigation/navigation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Reviews from "./routes/reviews";
import Technologies from "./routes/technologies";
import Footer from "./components/footer/footer";
import Categories from "./routes/categories";

function App() {
  return (
   <Router>
    <Navigation/>
    <Routes>
      <Route index={true} element={<Home/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='reviews' element={<Reviews/>}/>
      <Route path='technologies' element={<Technologies/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
