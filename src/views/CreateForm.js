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
  ]);
  const [formTitle, setFormTitle] = useState("Untitled Form");
  const [formDescription, setFormDescription] = useState("Form Description");
  const [selected, setSelected] = useState(1);

  console.log("theme: ", theme);
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
              color={theme.color}
            />
            {questions.map((question, idx) => (
              <QuestionCard
                key={question.id}
                selected={idx === selected + 1 ? true : false}
                question={question}
              />
            ))}
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default CreateForm;
