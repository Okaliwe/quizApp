import { useState,useContext } from "react";
import './App.css'
import EndSreen from "./Component/EndScreen";
import MainMenu from "./Component/MainMenu";
import Quiz from "./Component/Quiz";
import { QuizContext } from "./Helpers/Context";
function App() {
  const [games,setGames]=useState('Menu')
  const [score,setScore]=useState(0)
  return (
    <div className="App">
        <h1>Quiz App</h1>
           <QuizContext.Provider value={{games,setGames,score,setScore}}>
              {games==='Menu'&& <MainMenu/>}
              {games==='Quiz'&& <Quiz/>}
              {games==='EndScreen'&& <EndSreen/>}
           </QuizContext.Provider>
    </div>
  );
}

export default App;
