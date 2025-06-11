import { HashtagIcon } from "@heroicons/react/24/outline";
import { fetchQuestion } from "@/lib/data";

export default async function QuestionPage({
  params,
}: {
  params: { id: string };
}) {
  const question = await fetchQuestion(params.id);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
        <h1 className="text-3xl font-black flex items-center">
            <HashtagIcon className="h-6 w-6 mr-2" /> {question.title}
        </h1>
    </div>
  );
}
