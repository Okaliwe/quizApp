import { useState,useContext} from "react";
import { questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";
const Quiz = () => {
    const {score,setScore,setGames}=useContext(QuizContext)
    const [Qui,setQuiz]=useState(0)
    const [Ques,setQues]=useState('')
    const NextQuestion=()=>{
     if(questions[Qui].Ans==Ques){
        setScore(score+1)
      }
        setQuiz(Qui+1)
    }
    const finished=()=>{
        if(questions[Qui].Ans==Ques){
            setScore(score+1)
         }setGames('EndScreen')
    }
    return ( 
        <div className="Quiz">
            <h1>{questions[Qui].promp}</h1>
            <div className="options">
                <button onClick={()=>setQues('A')}> {questions[Qui].optionA}</button>
                <button onClick={()=>setQues('B')}> {questions[Qui].optionB}</button>
                <button onClick={()=>setQues('C')}> {questions[Qui].optionC}</button>
                <button onClick={()=>setQues('D')}> {questions[Qui].optionD}</button>
            </div> {
                Qui==questions.length-1?(
                    <button onClick={finished}>Finished Quiz</button>
                ):( <button onClick={NextQuestion}>NEXT QUESTION</button>)
            }
                    
                   
        </div>
     );
}
 
export default Quiz;