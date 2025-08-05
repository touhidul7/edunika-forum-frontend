import questions from '../../../public/data/questions.json'
import { useAuth } from '../../Auth/context/AuthContext';
import QuestionCard from './QuestionCard';

const QuestionList = () => { 
const {posts} = useAuth();

  return (
    <div className="space-y-4">
      {posts?.map((question) => (
        <QuestionCard key={question.id} question = {question} />
      ))}
    </div>
  );
};

export default QuestionList;
