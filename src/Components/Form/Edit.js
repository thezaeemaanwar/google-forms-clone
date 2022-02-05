import TitleCard from "components/Cards/TitleCard";
import QuestionCard from "components/Cards/QuestionCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToolBar from "components/Toolbar/ToolBar";
import createQuestion from "components/Helpers/CreateQuestion";
import {
  addQuestion,
  setDraggedQuestion,
  setQuestion,
} from "store/data/form.slice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Edit = () => {
  const { theme, questions } = useSelector((state) => state.form);
  const [formTitle, setFormTitle] = useState("Untitled Form");
  const [formDescription, setFormDescription] = useState("Form Description");
  const [selected, setSelected] = useState("gyusegvybct");
  const dispatch = useDispatch();

  const setFormQuestion = (id, question) => {
    dispatch(setQuestion({ id, question }));
  };

  const addNewQuestion = () => {
    const quest = { question: createQuestion(questions.length) };
    dispatch(addQuestion(quest));
  };

  const selectQuestionCard = (id) => {
    setSelected(id);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(setDraggedQuestion({ result }));
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

          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="questions">
              {(provided) => (
                <div
                  className="questions"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {questions.map((question, idx) => (
                    <Draggable
                      key={question.id}
                      draggableId={question.id}
                      index={idx}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <QuestionCard
                            key={question.id}
                            selected={selected === question.id ? true : false}
                            question={question}
                            setQuestion={setFormQuestion}
                            onClick={selectQuestionCard}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <ToolBar addQuestion={addNewQuestion} />
      </div>
    </div>
  );
};

export default Edit;
