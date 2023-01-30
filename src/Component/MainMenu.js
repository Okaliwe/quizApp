import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
const MainMenu = () => {
    const {games,setGames}=useContext(QuizContext)
    const HandleClk=()=>{
        setGames('Quiz')
    }
    return ( 
        <div className="Menu">
            <button onClick={HandleClk}>Start Quiz</button>
        </div>
     );
}
 
export default MainMenu;