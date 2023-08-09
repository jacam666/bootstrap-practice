import './App.css';
import FatLossPage from './Pages/FatLossPage';
import GeneralWellBeingPage from './Pages/GeneralWellBeingPage';
import HomePage from './Pages/HomePage';
import PreWorkoutPage from './Pages/PreWorkoutPage';
import ProteinPage from './Pages/ProteinPage';
import TrainingDietPlanPage from './Pages/TrainingDietPlanPage';
import MyNavbar from './components/MyNavbar';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <MyNavbar />
            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path='/ProteinPage' element={<ProteinPage />} />
                <Route path='/PreWorkoutPage' element={<PreWorkoutPage /> } />
                <Route path='/FatLossPage' element={ <FatLossPage /> } />
                <Route path='/GeneralWellBeingPage' element={ <GeneralWellBeingPage />} />
                <Route path='/TrainingDietPlanPage' element={ <TrainingDietPlanPage />} />
            </Routes>
        </div>
    )
}

export default App;
