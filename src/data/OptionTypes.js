import {
  faAlignLeft,
  faCalendarDay,
  faCheckSquare,
  faChevronDown,
  faCloudUploadAlt,
  faEllipsisH,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle, faClock } from "@fortawesome/free-regular-svg-icons";

export const SHORT_ANSWER = "Short answer";
export const PARAGRAPH = "Paragraph";
export const MULTIPLE_CHOICE = "Multiple choice";
export const CHECKBOX = "Checkbox";
export const DROPDOWN = "Dropdown";
export const FILE_UPLOAD = "File upload";
export const LINEAR_SCALE = "Linear scale";
export const MULTIPLE_CHOICE_GRID = "Multiple choice grid";
export const CHECKBOX_GRID = "Checkbox grid";
export const DATE = "Date";
export const TIME = "Time";
export const dropdownOptions = [
  { id: 1, text: SHORT_ANSWER, icon: faAlignLeft },
  { id: 2, text: PARAGRAPH, icon: faAlignLeft },
  { id: 3, text: MULTIPLE_CHOICE, icon: faDotCircle },
  { id: 4, text: CHECKBOX, icon: faCheckSquare },
  { id: 5, text: DROPDOWN, icon: faChevronDown },
  { id: 6, text: FILE_UPLOAD, icon: faCloudUploadAlt },
  { id: 7, text: LINEAR_SCALE, icon: faEllipsisH },
  { id: 8, text: MULTIPLE_CHOICE_GRID, icon: faGripHorizontal },
  { id: 9, text: CHECKBOX_GRID, icon: faGripHorizontal },
  { id: 10, text: DATE, icon: faCalendarDay },
  { id: 11, text: TIME, icon: faClock },
];
