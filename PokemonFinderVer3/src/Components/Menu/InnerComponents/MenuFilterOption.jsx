import { AiOutlineCaretDown } from "react-icons/ai";

function MenuFilterOption({ label, onClick }) {
  return (
    <div
      className="col-md-4 col-sm-4 col-xs-4 menu-filter-option"
      onClick={onClick}
    >
      {label} <AiOutlineCaretDown />
    </div>
  );
}

export default MenuFilterOption;