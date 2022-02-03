import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import QuestionCard from "components/Cards/QuestionCard";
import TitleCard from "components/Cards/TitleCard";
import FormHeader from "components/layout/Headers/FormHeader";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateForm = ({ theme }) => {
  const { type } = useParams();
  const [questions, setQuestions] = useState([
    {
      id: "gyusegvybct",
      title: "Question",
      options: [{ id: 0, text: "Option 1" }],
      optionType: { icon: faDotCircle, text: "Multiple choice" },
    },
    {
      id: "hv4nu5huy45nh",
      title: "Question",
      options: [{ id: 0, text: "Option 1" }],
      optionType: { icon: faDotCircle, text: "Multiple choice" },
    },
  ]);
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

  if (type === "blank")
    return (
      <div>
        <FormHeader />
        <div className="w-full mt-28 text-black flex flex-col items-center bg-purple/10 min-h-screen">
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
  else return <div></div>;
};

CreateForm.defaultProps = {
  theme: {
    
  }
}

export default CreateForm;
