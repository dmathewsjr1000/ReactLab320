import { useState } from 'react'
import './App.css'
import { learners } from '../Data/learners'
import LearnerList from '../Components/LearnerList/LearnerList'


function App() {
  const [learnersState, setLearnerState] = useState(learners)

  return (
    <div>
    <h1>React State</h1> 
    
    <LearnerList learners={learnersState} />
    </div>
  )
}

export default App
