import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import SearchPage from './SearchPage';
import MovieInfo from './MovieInfo';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add( faSpinner)



function App() {
  return (
      <Router>
    <div className="app">
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path=":imdbID" element={<MovieInfo />}></Route>
     </Routes>
    </div>
      </Router>
  );
}

export default App;
