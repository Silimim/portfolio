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

  // Music by <a href="https://pixabay.com/users/sigmamusicart-36860929/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=256260">Mikhail Smusev</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=256260">Pixabay</a>
  )
}

export default App
