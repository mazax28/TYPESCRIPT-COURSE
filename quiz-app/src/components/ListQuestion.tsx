import { useQuestions } from "../hooks/useQuestions"
import { useState } from "react"
function ListQuestion() {
    const 
    {
        question,
        answers,
        nextQuestion,
        isCorrectAnswer,
        indexQuestion,
        handleIsCorrect
    } = useQuestions()
    console.log(question)
    const [hasAnswered, setHasAnswered] = useState(false)

   
    // console.log(question)
  return (
    <div className="w-full flex-1 px-4 py-2 space-y-2 ">
        <div>
            <p className="text-[#18181B] font-bold">{question?.question}</p>
        </div>
        <div className="flex flex-col px-2 py-4  bg-[#18181B] rounded-lg space-y-4 mt-4">
             {
                answers.map((answer,index)=>(
                    <button  disabled={hasAnswered} onClick={()=> {
                        handleIsCorrect(answer, index)
                        setHasAnswered(true)
                    }} key={index} className="w-full bg-[#FAFAFA] p-2 rounded-lg shadow-lg cursor-pointer hover:bg-[#E4E4E7] transition duration-300 ease-in-out " style={{
                        border: index === indexQuestion && isCorrectAnswer !== null ? isCorrectAnswer ? '3px solid green' : '3px solid red' : '3px solid #FAFAFA'
                    }}  >{answer}</button>
                ))
            }
           
            
        </div>

        <div className="text-center">
            <button onClick={()=>{
                nextQuestion()
                setHasAnswered(false)
            }} className="bg-[#18181B] text-[#FAFAFA] p-2 rounded-lg cursor-pointer hover:bg-[#28282B] transition-all duration-300 ease-in-out">Next Question</button>
        </div>

      </div>
  )
}

export default ListQuestion
