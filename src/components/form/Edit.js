import TitleCard from "components/cards/TitleCard";
import QuestionCard from "components/cards/QuestionCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToolBar from "components/toolbar/toolBar";
import createQuestion from "components/helpers/createQuestion";
import {
  addQuestion,
  setDraggedQuestion,
  setQuestion,
  setSaved,
} from "store/data/form.slice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { addQuestionInDB } from "services/firebase/firestore.firebase";
import { PROGRESS_SAVING } from "data/statusMessages";

const Edit = () => {
  const { questions, id } = useSelector((state) => state.form);
  const [selected, setSelected] = useState(questions[0].id);
  const dispatch = useDispatch();

  const savedCallBack = (saved) => {
    dispatch(setSaved(saved));
  };
  const setFormQuestion = (qid, question) => {
    dispatch(setQuestion({ id: qid, question }));
  };

  const addNewQuestion = () => {
    const quest = { question: createQuestion(questions.length) };
    dispatch(addQuestion(quest));
    dispatch(setSaved(PROGRESS_SAVING));
    addQuestionInDB(id, quest.question, savedCallBack);
  };

  const selectQuestionCard = (qid) => {
    setSelected(qid);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(setDraggedQuestion({ result }));
  };

  return (
    <div>
      <div className="w-full text-black flex flex-col items-center sm:flex-row sm:items-start sm:justify-center min-h-screen">
        <div className="w-12 bg-white m-3"></div>
        <div className="w-11/12 lg:w-1/2 md:w-2/3 sm:w-3/4">
          <TitleCard />

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
