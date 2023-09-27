import { createContext ,useState} from 'react' 
import './App.css'
import GameBoard from './Components/GameBoard'
import ScoreCard from './Components/ScoreCard'

export const GameContext = createContext();

function App() {
  const [scores, setScores] = useState(0);
  const [skip,setSkip] = useState(0); 
  return (
    <>
    <GameContext.Provider value={{skip,scores,setScores,setSkip}}>
    <ScoreCard/>
    <GameBoard/>
    </GameContext.Provider>
    </>
  )
}

export default App
