import { Routes, Route } from 'react-router-dom'
import Fetch from './components/Fetch/Fetch'

function App() {
    return (
        <Routes>
            <Route path="" element={<Fetch title={'Github Info from Props'} />} />
        </Routes>
    )
}

export default App
