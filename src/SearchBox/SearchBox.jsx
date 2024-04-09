import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchBoxId = useId();

  return (
    <div className={css.searching}>
      <label htmlFor={searchBoxId}>
        Find contacts by name
        <input className={css.input} type="text" id={searchBoxId} />
      </label>
    </div>
  );
};

export default SearchBox;
