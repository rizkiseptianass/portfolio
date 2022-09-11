import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import SagalashopPage from './pages/SagalashopPage';
import MovieAppPage from './pages/MovieAppPage';
import PersonalLetterPage from './pages/PersonalLetterPage';
import NetflixClonePage from './pages/NetflixClonePage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/aboutme' element={<AboutMe />}/>
        <Route path='/sagalaShop-Project' element={<SagalashopPage />}/>
        <Route path='/movieApp-Project' element={<MovieAppPage />}/>
        <Route path='/personalLetter-Project' element={<PersonalLetterPage />}/>
        <Route path='/netflixClone-Project' element={<NetflixClonePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
