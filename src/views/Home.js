import HomeHeader from "components/layout/headers/HomeHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faEllipsisV,
  faChevronUp,
  faChevronDown,
  faThList,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { formTemplates, ownershipFilters } from "data/templates";
import FormTile from "components/form/formTile/FormTile";
import Dropdown from "components/dropdown/Dropdown";
import sortIcon from "assets/sort.png";
import { useDispatch, useSelector } from "react-redux";
import Loading from "components/loaders/page.loader";
import {
  addFormInDB,
  getTemplateFromDB,
  renameFormInDB,
} from "services/firebase/firestore.firebase";
import { setForm, setLoading } from "store/data/form.slice";
import { setForms } from "store/data/allForms.slice";

const Home = () => {
  const displayDate = "Yesterday";
  const [gridView, setGridView] = useState(false);
  const [ownedFilter, setOwnedFilter] = useState(ownershipFilters[1]);
  const { forms, loading } = useSelector((state) => state.allForms);
  const { user } = useSelector((state) => state.authentication);
  const { id, theme, title, description, questions } = useSelector(
    (state) => state.form
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleGridView = () => {
    setGridView(!gridView);
  };

  const dispatchCallBack = (form) => {
    dispatch(setForm(form));
  };

  const addNewForm = async (name, uid) => {
    const myForm = {
      theme,
      title,
      description,
      questions,
      date: new Date(),
      shared: true,
    };
    getTemplateFromDB(name);
    dispatch(setLoading(true));
    const myId = await addFormInDB(uid, myForm, dispatchCallBack);
    console.log("id", myId);
    dispatch(setLoading(false));
    navigate(`/create/${myId}/edit`);
  };

  const openForm = (formId) => {
    navigate(`/create/${formId}/edit`);
  };

  const removeForm = (formId) => {
    const temp = [...forms];
    const i = temp.findIndex((e) => e.id === formId);
    temp.splice(i, 1);
    dispatch(setForms({ forms: temp }));
  };
  const renameForm = (formId, name) => {
    const i = forms.findIndex((e) => e.id === formId);
    const temp = { ...forms[i] };
    temp.name = name;
    dispatch(setForms({ forms: temp }));
    renameFormInDB(formId, name);
  };

  console.log(forms);

  return (
    <div className="">
      <HomeHeader />
      <div className="mt-16">
        <div className="bg-grey h-64 w-full pt-4 flex flex-col items-center ">
          <div className="w-2/3 flex justify-between items-center mt-1 ml-1 mb-3 text-lg">
            <div className="text-black text-base">Start a new form</div>
            <div className="flex items-center">
              <div className="flex items-center justify-around hover:bg-hoverGrey hover:cursor-pointer px-3 py-1 pr-4 rounded-md border-r">
                <div className="pr-3 text-base">Template Gallery</div>
                <div className="flex flex-col justify-center text-xs">
                  <FontAwesomeIcon icon={faChevronUp} />
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <div className="px-2 hover:cursor-pointer w-9 h-9 rounded-full hover:bg-hoverGrey flex items-center justify-center">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
          <div className="flex w-2/3 justify-between">
            {formTemplates.map((temp, i) => (
              <div key={temp.name}>
                <img
                  className="w-48 border border-hoverGrey hover:border-purple hover:cursor-pointer rounded-md"
                  src={temp.img}
                  alt={`template-${i}`}
                  onClick={() => addNewForm(temp.name, user.uid, temp)}
                />
                <div className="mt-2 ml-1 text-black text-sm">{temp.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-2/3 flex  justify-between items-center my-2">
            <div>{displayDate}</div>
            <Dropdown
              options={ownershipFilters}
              setSelected={setOwnedFilter}
              defaultSelected={ownedFilter.text}
            />
            <div className="flex items-center">
              <div
                onClick={toggleGridView}
                className="w-10 h-10 flex justify-center items-center rounded-full text-white hover:cursor-pointer hover:bg-grey hover:text-hoverGrey active:bg-purple/[0.2]"
              >
                {gridView ? (
                  <FontAwesomeIcon
                    className="text-fontGrey text-2xl px-0.5 rounded-sm  active:text-purple"
                    icon={faGripHorizontal}
                  />
                ) : (
                  <FontAwesomeIcon
                    className=" bg-fontGrey px-px rounded-sm active:bg-purple hover:text-hoverGrey"
                    icon={faThList}
                  />
                )}
              </div>
              <div className="w-10 h-10 flex justify-center items-center hover:bg-grey hover:cursor-pointer rounded-full active:bg-purple/[0.2]">
                <img className="w-5" src={sortIcon} alt="sort" />
              </div>
              <div className="w-10 h-10 flex justify-center items-center hover:bg-grey hover:cursor-pointer rounded-full active:bg-purple/[0.2] active:text-purple">
                <FontAwesomeIcon icon={faFolder} />
              </div>
            </div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className={`flex w-2/3 ${gridView ? "flex-row" : "flex-col"}`}>
              {forms.length ? (
                1 &&
                forms.map((form) => (
                  <FormTile
                    key={form.id}
                    formData={form}
                    removeForm={removeForm}
                    renameForm={renameForm}
                    gridView={gridView}
                    onClick={() => openForm(form.id)}
                  />
                ))
              ) : (
                <div className="self-center"> No Forms Yet</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
