import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

// Компонент фільтрації контактів
const Filter = () => {
  const filterQuery = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = ({ currentTarget: { value } }) => {
    const newValue = value.toLowerCase();
    dispatch(changeFilter(newValue));
  };
  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css.input}
          value={filterQuery}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

export default Filter;
