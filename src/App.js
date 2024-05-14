import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.css'
import { Nav } from './components/Nav/Nav'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contacts'
import { ProjectPage } from './pages/ProjectPage'
import { ScrollToTop } from './utils/scrollToTop'
  
function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/projects' element={<Projects />}></Route>
                    <Route path='/project/:id' element={<ProjectPage />}></Route>
                    <Route path='/contacts' element={<Contacts />}></Route>
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App
