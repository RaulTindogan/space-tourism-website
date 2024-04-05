import Header from './components/Header'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {

  return (
    <>
       <Router basename={"/space-tourism-website/"}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='404' element={<Page404 />} />
          <Route path='*' element={<Navigate to='404' replace />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
