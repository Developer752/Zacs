
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Layout from './Assets/Layout';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
