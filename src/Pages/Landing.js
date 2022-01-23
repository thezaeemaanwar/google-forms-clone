import HomeHeader from "Components/Headers/HomeHeader";
import eventReg from "Assets/eventReg.png";
import newForm from "Assets/newForm.png";
import partyInv from "Assets/partyInv.png";
import rsvp from "Assets/rsvp.png";
import contactInfo from "Assets/contactInfo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const templates = [
    { name: "Blank", img: newForm },
    { name: "Event Registration", img: eventReg },
    { name: "Contact Information", img: contactInfo },
    { name: "Party Invite", img: partyInv },
    { name: "RSVP", img: rsvp },
  ];
  return (
    <div className="bg-red">
      <HomeHeader />
      <div className="mt-16">
        <div className="bg-grey h-64 w-full flex flex-col items-center justify-center">
          <div className="w-2/3 flex justify-between my-2 ml-1 mb-3 text-lg">
            <div className="text-black">Start a new form</div>
            <div className="flex">
              <div className="flex items-center justify-around hover:bg-hoverGrey rounded-md">
                <div>Template Gallery</div>
                <div className="flex flex-col justify-center text-xs">
                  <FontAwesomeIcon icon={faChevronUp} />
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
          <div className="flex w-2/3 justify-between">
            {templates.map((temp, i) => (
              <div key={temp.name}>
                <img
                  className="w-48 border border-hoverGrey hover:border-purple hover:cursor-pointer rounded-md"
                  src={temp.img}
                  alt={`template-${i}`}
                />
                <div className="mt-2 ml-1 text-black">{temp.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
