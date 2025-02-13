import { useEffect, useState } from "react";
import { Result,Root } from "../api/types";
import { getTriviaQuestions } from "../api/triviaApi";
export const useQuestions = () => {
    const [questions,setQuestions] = useState<Result[]>([])
    const [question,setQuestion] = useState<Result>()
    const [answers,setAnswers] = useState<string[]>([])
    const [isCorrectAnswer,setIsCorrectAnswer] = useState<boolean | null>(null)
    const [indexQuestion,setIndexQuestion] = useState<number>(0)

    const getQuestions = async () =>{
        const response :Root = await  getTriviaQuestions()
        setQuestions(response.results)
        console.log(response.results)
    }
    const getQuestion = async () => {
        // Se asegura de que haya preguntas antes de acceder al último elemento
        if (questions.length <= 0) {
          await  getQuestions()
        }
        const currentQuestion = questions.pop();
        console.log(currentQuestion)
        if (currentQuestion) {
          // Si hay una pregunta, la establece
          setQuestion(currentQuestion);
        } else {
          console.error("No hay más preguntas disponibles");
        }
      }
    const nextQuestion = () => {
        setIsCorrectAnswer(null)
        getQuestion()
    }
    const getAnswers = () =>{

        if(question){
            const answers = [...question.incorrect_answers,question.correct_answer]
            setAnswers(answers)
        }
    }
    // const refreshQuestions = async () =>{

    //     setQuestions([])
    //     setAnswers([])
    //     getQuestions()
        
    // }
    const handleIsCorrect = (answer:string, index: number): boolean =>{
        if(question){
            const correct = question.correct_answer.includes(answer)
            console.log(correct)
            setIndexQuestion(index)
            setIsCorrectAnswer(correct)
        }
        return false
    }
    useEffect(()=>{

        getQuestions()
    },[])
    useEffect(()=>{
        if(questions.length>0){
            getQuestion()
        }
    },[questions])
    useEffect(()=>{
        if(question){
            getAnswers()
        }
    },[question])
    return {questions, question,answers,nextQuestion,isCorrectAnswer,handleIsCorrect,indexQuestion}

}