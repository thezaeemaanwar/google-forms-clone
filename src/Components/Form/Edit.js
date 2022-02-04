import TitleCard from "components/Cards/TitleCard";
import QuestionCard from "components/Cards/QuestionCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { questionTemplate } from "data/Templates";

const Edit = () => {
  const { theme } = useSelector((state) => state.form);
  const [questions, setQuestions] = useState(questionTemplate);
  const [formTitle, setFormTitle] = useState("Untitled Form");
  const [formDescription, setFormDescription] = useState("Form Description");
  const [selected, setSelected] = useState("gyusegvybct");

  const setQuestion = (id, question) => {
    const temp = [...questions];
    const ind = temp.findIndex((x) => x.id === id);
    temp[ind] = question;
    setQuestions(temp);
  };

  const selectQuestionCard = (id) => {
    setSelected(id);
  };
  return (
    <div>
      <div className="w-full  text-black flex flex-col items-center min-h-screen">
        <div className="w-1/2">
          <TitleCard
            title={formTitle}
            setTitle={setFormTitle}
            description={formDescription}
            setDescription={setFormDescription}
            color={theme.color}
          />
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              selected={selected === question.id ? true : false}
              question={question}
              setQuestion={setQuestion}
              onClick={selectQuestionCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Edit;
