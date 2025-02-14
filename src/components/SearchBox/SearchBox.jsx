import css from "./SearchBox.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../../redux/filtersSlice.js";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
