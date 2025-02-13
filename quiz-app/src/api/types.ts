export interface Root {
    response_code: number
    results: Result[]
  }
  
  export interface Result {
    type: string
    difficulty: string
    category: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }