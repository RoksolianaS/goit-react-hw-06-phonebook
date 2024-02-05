import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlicer';
import css from './Fliter.module.css';

const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = setFilter(value);
    dispatch(action);
  };
  return (
    <div className={css.filterContainer}>
      <p>Find contacts by name</p>
      <input
        className={css.filter_input}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export { Filter };