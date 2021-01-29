import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phoneBookSelectors, phoneBookActions } from 'redux/phoneBook';
import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector(phoneBookSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.description}>Find contacts by name</div>
      <input
        className={styles.input}
        onChange={event =>
          dispatch(phoneBookActions.onChangeFilter(event.target.value))
        }
        value={filter}
        name="filter"
        type="text"
      />
    </>
  );
}

export default Filter;
