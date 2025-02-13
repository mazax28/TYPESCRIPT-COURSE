import ListQuestion from "./ListQuestion"

function QuestionCard() {
  return (
    <div className="w-[400px] h-[500px] bg-[#FAFAFA] flex flex-col space-y-6 items-center p-4 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold text-[#18181B]">Quiz App</h1>
      <ListQuestion />

    </div>
  )
}

export default QuestionCard
