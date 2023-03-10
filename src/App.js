import './Styles.scss';
import NavBarComponent from './components/NavBarComponent/NavBar-Component.jsx';
import { Route, Routes } from 'react-router-dom';
import TimelineComponent from './components/TimelineComponent/Timeline-Component';
import StatsComponent from './components/StatsComponent/Stats-Component';
import CompareComponent from './components/CompareComponent/Compare-Component';
import LandingComponent from './components/LandingComponent/Landing-Component';

function App() {
  return (<>
    <NavBarComponent />
    <Routes>
      <Route path='/' element={<LandingComponent />} />
      <Route path='/stats' element={<StatsComponent />} />
      <Route path='/timeline' element={<TimelineComponent />} />
      <Route path='/compare' element={<CompareComponent />} />

    </Routes>
  </>);
}

export default App;
