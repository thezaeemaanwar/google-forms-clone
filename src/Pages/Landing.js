import HomeHeader from "Components/Headers/HomeHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faEllipsisV,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formTemplates, ownershipFilters, formSamples } from "Data/Templates";
import FormTile from "Components/FormTile/FormTile";

const Landing = () => {
  const [date, setDate] = useState("Yesterday");
  const [ownedFilter, setOwnedFilter] = useState(ownershipFilters[1]);
  const [forms, setForms] = useState(formSamples);
  return (
    <div className="bg-red">
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
                <Link to={temp.url}>
                  <img
                    className="w-48 border border-hoverGrey hover:border-purple hover:cursor-pointer rounded-md"
                    src={temp.img}
                    alt={`template-${i}`}
                  />
                </Link>
                <div className="mt-2 ml-1 text-black text-sm">{temp.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div>
            <div className="w-2/3">{date}</div>
          </div>
          <div className="flex w-2/3">
            {forms.map((form) => (
              <FormTile key={form.id} formData={form} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
