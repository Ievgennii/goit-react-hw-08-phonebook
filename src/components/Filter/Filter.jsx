import PropTypes from 'prop-types';

import css from './Filter.module.css'

export const Filter = ({ value, onChangeFilter }) => {

  return (
    <label >
      Search contacts:
      <input className={css.input} 
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Enter contact..."        
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
