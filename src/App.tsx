import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from "./pages/Landing.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contacts from "./pages/Contacts.tsx";

function App() {

  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
