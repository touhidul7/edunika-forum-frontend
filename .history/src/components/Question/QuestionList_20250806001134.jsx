import questions from '../../../public/data/questions.json'
import QuestionCard from './QuestionCard';

const QuestionList = () => { 

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <QuestionCard key={question.id} {...question} />
      ))}
    </div>
  );
};

export default QuestionList;
