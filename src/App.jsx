import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
const App = () => {
  const [isGameStarted, setIsGameStatrted] = useState(false);
  const ToggleGamePlay = () => {
    setIsGameStatrted((prev) => !prev)
  }
  return (<>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={ToggleGamePlay} />}
  </>
  )
}

export default App