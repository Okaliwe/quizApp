import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { questions } from "../Helpers/QuestionBank";
const EndSreen = () => {
   const{score,setScore,setGames}=useContext(QuizContext)
   const Restart=()=>{
      setScore(0)
      setGames('Menu')

   }
    return ( 
        <div className="endscreen">
           <h1>Quiz finished</h1>
           <h3>{score}/{questions.length}</h3>
           <button onClick={Restart}>Restart Quiz</button>
        </div>
     );
}
 
export default EndSreen;