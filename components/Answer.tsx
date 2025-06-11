import CorrectButton from "./CorrectButton";

interface AnswerProps {
  id: string;
  question_id: string;
  text: string;
  votes: number;
  voted?: boolean;
}

export function Answer({ id, text, votes, question_id, voted = false }: AnswerProps) {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <div className="mr-2 rounded-xl bg-emerald-100 px-2 text-sm text-emerald-700">
        {votes}
      </div>
      <p className="text w-full text-left font-semibold">{text}</p>
      <CorrectButton id={id} questionId={question_id} isAccepted={voted} />
    </div>
  );
}