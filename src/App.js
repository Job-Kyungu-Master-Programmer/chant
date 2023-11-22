import { BrowserRouter, Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Songs from "./components/Songs"
import About from "./components/About"
import Song from "./components/Song"

const Wrapper = ({ children }) => children;

const App = () => {
  return (
    <div className="main">
        <BrowserRouter>
            <header className="app__header">
              <Navbar />
            </header>
            <div className="app__bar">
              <Wrapper>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/songs/*" element={<Songs />} />
                    <Route path="/about" element={<About />} />
                    <Route path="song" element={<Song />} />
                </Routes>
              </Wrapper>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App