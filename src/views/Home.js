import HomeHeader from "components/layout/Headers/HomeHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faEllipsisV,
  faChevronUp,
  faChevronDown,
  faThList,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { formTemplates, ownershipFilters } from "data/Templates";
import FormTile from "components/Form/FormTile/FormTile";
import Dropdown from "components/Dropdown/Dropdown";
import sortIcon from "assets/sort.png";
import { useDispatch, useSelector } from "react-redux";
import Loading from "components/Loaders/page_loader";
import {
  addFormInDB,
  getTemplateFromDB,
} from "services/firebase/firestore.firebase";
import { setForm, setLoading } from "store/data/form.slice";

const Home = () => {
  const [displayDate, setDisplayDate] = useState("Yesterday");
  const [gridView, setGridView] = useState(false);
  const [ownedFilter, setOwnedFilter] = useState(ownershipFilters[1]);
  const { forms, loading } = useSelector((state) => state.allForms);
  const { user } = useSelector((state) => state.authentication);
  const { id, theme, title, description, questions } = useSelector(
    (state) => state.form
  );
  const dispatch = useDispatch();

  const toggleGridView = () => {
    setGridView(!gridView);
  };

  const dispatchCallBack = (form) => {
    dispatch(setForm(form));
  };
  const addNewForm = (name, uid) => {
    const myForm = {
      theme,
      title,
      description,
      questions,
      date: new Date(),
      shared: true,
    };
    getTemplateFromDB(name);
    setLoading(true);
    addFormInDB(uid, myForm, dispatchCallBack);
    <Navigate to={`/create/${id}/edit`} />;
  };
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
                {/* <Link to={temp.url}> */}
                <img
                  className="w-48 border border-hoverGrey hover:border-purple hover:cursor-pointer rounded-md"
                  src={temp.img}
                  alt={`template-${i}`}
                  onClick={() => addNewForm(temp.name, user.uid, temp)}
                />
                {/* </Link> */}
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
              defaultSelected={ownershipFilters[1].text}
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
              {forms.map((form) => (
                <Link key={form.id} to={`/create/${form.id}/edit`}>
                  <FormTile key={form.id} formData={form} gridView={gridView} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
