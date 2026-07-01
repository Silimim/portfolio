import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home.tsx";
import MyFit from "./pages/MyFit.tsx";
import MyFitPrivacy from "./pages/MyFitPrivacy.tsx";
import MyFitTerms from "./pages/MyFitTerms.tsx";
import { AchievementProvider } from "./components/game/Achievements";
import MeepleCursor from "./components/game/MeepleCursor";
import EasterEggs from "./components/game/EasterEggs";

function App() {
  return (
    <AchievementProvider>
      <Router basename="/">
        <main className="paper-bg grain min-h-screen overflow-x-hidden">
          <Navbar />
          <MeepleCursor />
          <EasterEggs />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/myfit' element={<MyFit />} />
            <Route path='/projects/myfit/privacy' element={<MyFitPrivacy />} />
            <Route path='/projects/myfit/terms' element={<MyFitTerms />} />
          </Routes>
        </main>
      </Router>
    </AchievementProvider>
  )
}

export default App
